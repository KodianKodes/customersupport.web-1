from fastapi import Depends, FastAPI, UploadFile, Request
from routers.sentiment import sentiment
import models

# Email verification imports
from models import User
from tortoise.signals import post_save
from tortoise.contrib.fastapi import register_tortoise
from typing import List, Optional, Type
from tortoise import BaseDBAsyncClient
from emails import send_email, verify_token

description = """
Scrybe API helps you analyse sentiments in your customer support calls
"""

tags_metadata = [
    {
        "name": "uploa",
        "description": "Analyse audio calls for sentiment.",
    },
    {
        "name": "users",
        "description": "Operations with users. The **login** logic is also here.",
    },
]

app = FastAPI(
    title="Scrybe API",
    description=description,
    version="0.0.1",
    openapi_tags=tags_metadata,
)


@app.get("/")
async def ping():
    return {"message": "Scrybe Upp"}


@app.post("/upload", tags=['analyse'])
async def analyse(files: UploadFile):
    transcript = transcribe(file)
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