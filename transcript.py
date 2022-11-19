
from fastapi import APIRouter

transcribe_router = APIRouter(
    prefix = "transcribe",
    tags = ["TRANSRIPTION_SERVICE"]
)

@transcribe_router.post("/")
def transcribe_audio():
    ...
    
    
    
    
    
    

# import whisper 

# audio_file = ""

# model = whisper.load_model("base")
# result = model.transcribe(audio_file)
# print(result["text"])