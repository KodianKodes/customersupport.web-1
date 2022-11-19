# pull the official base image
FROM python:3.8

# set work directory
WORKDIR /backend/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# copy requirements.txt so it can be cached if changes are made to sourcefile but requirements dont change.
COPY requirements.txt ./


# install dependencies
RUN pip install --upgrade pip 
RUN pip install -r requirements.txt

#Copy Project
COPY . .

EXPOSE 8008
# CMD ["python3", "manage.py", "runserver", "0.0.0.0:8008"]