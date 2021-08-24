FROM node:16.7-alpine

RUN mkdir app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8080

# re-initialize the database
#RUN npx knex migrate:rollback
#RUN npx knex migrate:latest
#RUN npx knex seed:run

# start app
CMD ["npm", "start"]
