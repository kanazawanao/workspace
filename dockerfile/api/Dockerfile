FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run -- nx run api:build:staging

FROM node:12.7-alpine
COPY --from=build /usr/src/app/dist/apps/api /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
CMD ["node", "/usr/src/app/main.js"]