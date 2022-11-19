# models for database [SQLAlchemy]
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Enum
from sqlalchemy.orm import relationship

from db import Base

# Imports for email verification purpose
import pydantic
from pydantic import BaseModel
from tortoise import Model, fields
from typing import Optional, List
from tortoise.contrib.pydantic import pydantic_model_creator

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    

class Audio(Base):
    __tablename__ = "audios"

    id = Column(Integer, primary_key=True, index=True)
    audio_path = Column(String, index=True)
    file = Column(String, index=True)
    timestamp = Column(DateTime, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))

    user = relationship("User", back_populates="audios")

class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime, index=True)
    job_status = Column(Enum("PENDING", "SUCCESS", "FAILED"), index=True)
    audio_id = Column(Integer, ForeignKey("audios.id"))

    audio = relationship("Audio", back_populates="jobs")

class Transcript(Base):
    __tablename__ = "transcripts"

    id = Column(Integer, primary_key=True, index=True)
    text = Column(String, index=True)
    job_id = Column(Integer, ForeignKey("jobs.id"))

    job = relationship("Job", back_populates="transcripts")

# Test user for email verification. Feel free to remove

class User(Model):
    id = fields.IntField(pk = True, index = True)
    username = fields.CharField(max_length=20, null=False, unique=True)
    email = fields.CharField(max_length=200, null=False, unique=True)
    password = fields.CharField(max_length=200, null=False)
    is_verified = fields.BooleanField(default = False)


user_pydantic = pydantic_model_creator(User, name = "User", exclude=('is_verified', ))
user_pydanticIn = pydantic_model_creator(User, name = "UserIn", exclude_readonly=True, exclude=('is_verified', ))
user_pydanticOut = pydantic_model_creator(User, name = "UserOut", exclude=("password", ))