FROM node:16.7-alpine

RUN mkdir app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8080

# start app
CMD ["npm", "start"]
