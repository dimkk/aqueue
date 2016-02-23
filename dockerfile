FROM node:argon

MAINTAINER dimkk@outlook.com

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install

CMD [ "npm", "start" ]

EXPOSE 8080