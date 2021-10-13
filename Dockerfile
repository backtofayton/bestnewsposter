FROM python:3.6-stretch
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /django_app
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./