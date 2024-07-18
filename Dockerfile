FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json .env.local ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]