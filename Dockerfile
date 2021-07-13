FROM tiangolo/uwsgi-nginx-flask:python3.6

COPY requirements.txt /tmp/
COPY ./package*.json /app/

RUN npm install --silent
RUN pip install -U pip
RUN pip install -r /tmp/requirements.txt

COPY ./app /app

ENV MESSAGE "Hello from Docker"