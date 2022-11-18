# pydantic models
from pydantic import BaseModel
import datetime, enum

class UserBase(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str

class UserCreate(UserBase):
    hashed_password: str

class User(UserBase):
    is_active: bool

    class Config:
        orm_mode = True

class AudioBase(BaseModel):
    id: int
    audio_path: str
    file: str
    timestamp: datetime.datetime

class AudioCreate(AudioBase):
    user_id: int

class Audio(AudioBase):
    user: User

    class Config:
        orm_mode = True


class JobBase(BaseModel):
    id: int
    timestamp: datetime.datetime
    job_status: str

class JobCreate(JobBase):
    audio_id: int

class Job(JobBase):
    audio: Audio

    class Config:
        orm_mode = True

class TranscriptBase(BaseModel):
    id: int
    text: str

class TranscriptCreate(TranscriptBase):
    job_id: int

class Transcript(TranscriptBase):
    job: Job

    class Config:
        orm_mode = True

    
        