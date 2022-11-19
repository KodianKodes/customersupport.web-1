# crud operations for the backend app
from sqlalchemy.orm import Session
import models, schema

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schema.UserCreate):
    db_user = models.User(first_name=user.first_name, last_name=user.last_name, email=user.email, hashed_password=user.hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_audio(db: Session, audio_id: int):
    return db.query(models.Audio).filter(models.Audio.id == audio_id).first()

def get_audios(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Audio).offset(skip).limit(limit).all()

def create_audio(db: Session, audio: schema.AudioCreate, user_id: int):
    db_audio = models.Audio(audio_path=audio.audio_path, file=audio.file, timestamp=audio.timestamp, user_id=user_id)
    db.add(db_audio)
    db.commit()
    db.refresh(db_audio)
    return db_audio

def get_job(db: Session, job_id: int):
    return db.query(models.Job).filter(models.Job.id == job_id).first()

def get_jobs(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Job).offset(skip).limit(limit).all()

def create_job(db: Session, job: schema.JobCreate, audio_id: int):
    db_job = models.Job(timestamp=job.timestamp, job_status=job.job_status, audio_id=audio_id)
    db.add(db_job)
    db.commit()
    db.refresh(db_job)
    return db_job

async def get_transcript(db: Session, transcript_id: int):
    return db.query(models.Transcript).filter(models.Transcript.id == transcript_id).first()

async def get_transcripts(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Transcript).offset(skip).limit(limit).all()

def create_transcript(db: Session, transcript: schema.TranscriptCreate, job_id: int):
    db_transcript = models.Transcript(text=transcript.text, job_id=job_id)
    db.add(db_transcript)
    db.commit()
    db.refresh(db_transcript)
    return db_transcript

