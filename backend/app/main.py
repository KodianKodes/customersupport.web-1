from fastapi import Depends, FastAPI, UploadFile, File, status, HTTPException
from routers.sentiment import sentiment
from routers.transcribe import transcribe_file
import models
# from jwt import (
#     main_login
# )
# from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

# from db import Base, engine, SessionLocal
# from sqlalchemy.orm import Session

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

# # create the endpoint
# @app.post('/login', summary = "create access token for logged in user")
# async def login(form_data: OAuth2PasswordRequestForm = Depends(), session: Session = Depends(get_session)):
#     # return token once the user has been successfully authenticated, or it returns an error.
#     return await main_login(form_data, session)

#create registration endpoint
@app.post('/users', summary="Create new user")
async def create_user(user: schema.Users, session: Session =Depends(get_current_user)):
    hashed_password = pwd_context.hash(user.password)
    db_user = models.User(first_name=user.firstname,last_name=user.last_name, email=user.email, hashed_password=hashed_password)
    # querying database to check if user already exist
    user = db.get(user.email, None)
    if user is not None:
            raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email already exist"
        )
    else:
        session.add(db_user)
        session.commit()
        sesion.refresh(db_user)
        return db_user
