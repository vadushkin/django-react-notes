FROM python:3.11

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN pip3 install -r requirements.txt
RUN python manage.py migrate

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
