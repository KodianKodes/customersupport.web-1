from fastapi import Depends, FastAPI, UploadFile
from routers.sentiment import sentiment
import models

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
