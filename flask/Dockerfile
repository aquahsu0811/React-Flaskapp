FROM python:3.7
RUN mkdir /flask
WORKDIR /flask
COPY requirements.txt /flask/requirements.txt
RUN pip install --upgrade pip && \
    pip install -r requirements.txt
RUN apt-get update 
RUN apt-get install ffmpeg libsm6 libxext6  -y
COPY . .
