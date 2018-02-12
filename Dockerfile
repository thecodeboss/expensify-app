FROM node:argon

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app
RUN npm run build:prod

EXPOSE 3000

CMD ["npm", "start"]
