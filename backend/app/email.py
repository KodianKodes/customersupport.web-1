from fastapi import (BackgroundTasks, UploadFile,File, Form, Depends, HTTPException, status)
from fastapi_mail import FastMail, ConnectionConfig, MessageSchema
from typing import List
import jwt
from fastapi.exceptions import HTTPException
from dotenv import dotenv_values
from models import User
from starlette.requests import Request
from starlette.responses import JSONResponse


config_credentials = dotenv_values('.env')

conf = ConnectionConfig(
    MAIL_USERNAME = config_credentials['EMAIL'],
    MAIL_PASSWORD = config_credentials['PASS'],
    MAIL_FROM = config_credentials['EMAIL'],
    MAIL_PORT = 587,
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_STARTTLS = True,
    USE_CREDENTIALS = True,
    MAIL_SSL_TLS= False
    
)

async def send_email_reset(email: List, instance: User):
    token_data = {
        'id': instance.id,
        'email': instance.email
    }

    token = jwt.encode(token_data, config_credentials['SECRET'], algorithm='HS256')


    template = f"""
        <DOCTYPE HTML>
        <html>
            <head>
            </head>
            <body>
                <div>
                    <h3>Password Reset</h3>
                    <br>
                    <p>You made a request to reset your password. Kindly click on the link to proceed
                    or ignore this email if it wasn't requested by you.</p>
                    <a href="http://localhost:8000/reset_password?token={token}">Reset your password </a>
                </div>
            </body>
        </html>
    """

    message = MessageSchema(
        subject = "Password Reset",
        recipients =email,
        body = template,
        subtype = "html"
    )

    fm =FastMail(conf)
    await fm.send_message(message=message)


async def verify_token(token: str):
    try:
        payload = jwt.decode(token, config_credentials['SECRET'], algorithms=['HS256'])
        user = await User.get(id = payload.get("id"))
    except:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={"WWW.Authenticate": "Bearer"}
        )
    return user
