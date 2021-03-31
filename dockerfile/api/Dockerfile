FROM node:12.7-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run -- nx run api:build

CMD ["node", "/usr/src/app/dist/apps/api/main"]