FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run -- nx run client:build

FROM nginx:1.17.1-alpine
COPY ./dockerfile/client/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/apps/client /usr/share/nginx/html