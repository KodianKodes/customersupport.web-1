from fastapi import Depends, FastAPI, Request, UploadFile, File, status, HTTPException
from routers.sentiment import sentiment
from routers.transcribe import transcribe_file
import models
# from jwt import (
#     main_login
# )
# from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

# from db import Base, engine, SessionLocal
# from sqlalchemy.orm import Session

# Email verification imports
from models import User
from tortoise.signals import post_save
from tortoise.contrib.fastapi import register_tortoise
from typing import List, Optional, Type
from emails import send_email, verify_token

description = """
Scrybe API helps you analyse sentiments in your customer support calls
"""

tags_metadata = [
    {
        "name": "upload",
        "description": "Analyse audio calls for sentiment.",
    },
]

# create the database.
# Base.metadata.create_all(engine)

# database.
def get_session():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()

app = FastAPI(
    title="Scrybe API",
    description=description,
    version="0.0.1",
    openapi_tags=tags_metadata,
)


@app.get("/")
async def ping():
    return {"message": "Scrybe Up"}


@app.post("/upload", tags=['analyse'])
async def analyse(file: UploadFile=File(...)):
    try:
        contents = file.file.read()
        with open(file.filename, 'wb') as f:
            f.write(contents)
    except Exception:
        return {"error": "There was an error uploading the file"}
    finally:
        file.file.close()

    transcript = transcribe_file(file.filename)
    sentiment_result = sentiment(transcript)
    return {"transcript": transcript, "sentiment_result": sentiment_result}


# Email verification processes

register_tortoise(
    app,
    db_url="sqlite://database.sqlite3",
    modules={"models" : ["models"]},
    generate_schemas=True,
    add_exception_handlers=True
)
@post_save(User)
async def validate_user(
    sender: "Type[User]",
    instance: User,
    created: bool,
    update_fields: List[str]
) -> None:
    if created:
        await send_email([instance.email], instance)

@app.get('/verification')
async def email_verification(request: Request, token: str):
    user = await verify_token(token)

    if user and not user.is_verified:
        user.is_verified = True
        await user.save()
        return{
            "status" : "ok",
            "data" : f"Hello {user.username}, your account has been successfully verified"}

# # create the endpoint
# @app.post('/login', summary = "create access token for logged in user")
# async def login(form_data: OAuth2PasswordRequestForm = Depends(), session: Session = Depends(get_session)):
#     # return token once the user has been successfully authenticated, or it returns an error.
#     return await main_login(form_data, session)
