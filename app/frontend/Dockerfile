# FROM node:16.14-alpine
# WORKDIR /app-frontend
#  ...

FROM node:16.14-alpine

WORKDIR /app-backend

COPY package* ./

RUN npm install

COPY . .

CMD ["npm", "start"]
