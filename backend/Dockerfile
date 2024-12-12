# https://fastapi.tiangolo.com/tr/deployment/docker/#build-a-docker-image-for-fastapi
# 

FROM python:3.11

WORKDIR /app
COPY requirements.txt /app
RUN pip install --no-cache-dir --upgrade -r requirements.txt
ADD /src /app

CMD ["uvicorn", "main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "80"]
