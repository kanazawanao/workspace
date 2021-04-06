FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run -- nx run client-manager:build:staging

FROM nginx:1.17.1-alpine
COPY ./dockerfile/client-manager/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/apps/client-manager /usr/share/nginx/html