FROM node:alpine

WORKDIR /var/app

COPY ./package.json ./

RUN npm i

COPY . .

CMD [ "npm", "start" ]