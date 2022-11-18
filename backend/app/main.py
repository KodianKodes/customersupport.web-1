# main app code
from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import crud, models, schemas
from database.db import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
List = []
# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.get("/users/", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return db_user

@app.post("/audios/", response_model=schemas.Audio)
def create_audio(audio: schemas.AudioCreate, db: Session = Depends(get_db)):
    return crud.create_audio(db=db, audio=audio)

@app.get("/audios/", response_model=List[schemas.Audio])
def read_audios(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    audios = crud.get_audios(db, skip=skip, limit=limit)
    return audios

@app.get("/audios/{audio_id}", response_model=schemas.Audio)
def read_audio(audio_id: int, db: Session = Depends(get_db)):
    db_audio = crud.get_audio(db, audio_id=audio_id)
    if db_audio is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Audio not found")
    return db_audio

@app.post("/jobs/", response_model=schemas.Job)
def create_job(job: schemas.JobCreate, db: Session = Depends(get_db)):
    return crud.create_job(db=db, job=job)

@app.get("/jobs/", response_model=List[schemas.Job])
def read_jobs(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    jobs = crud.get_jobs(db, skip=skip, limit=limit)
    return jobs

@app.get("/jobs/{job_id}", response_model=schemas.Job)
def read_job(job_id: int, db: Session = Depends(get_db)):
    db_job = crud.get_job(db, job_id=job_id)
    if db_job is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job not found")
    return db_job

@app.post("/transcripts/", response_model=schemas.Transcript)
def create_transcript(transcript: schemas.TranscriptCreate, db: Session = Depends(get_db)):
    return crud.create_transcript(db = db, transcript = transcript)

@app.get("/transcripts/", response_model=List[schemas.Transcript])
def read_transcripts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    transcripts = crud.get_transcripts(db, skip=skip, limit=limit)
    return transcripts

@app.get("/transcripts/{transcript_id}", response_model=schemas.Transcript)
def read_transcript(transcript_id: int, db: Session = Depends(get_db)):
    db_transcript = crud.get_transcript(db, transcript_id=transcript_id)
    return db_transcript


