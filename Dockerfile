FROM node:18-alpine AS development

EXPOSE 3070

WORKDIR /usr/src/dev_app-frontend

COPY ["./","./"]

RUN npm install

ENTRYPOINT npm run dev

# ----------------------------------------

FROM nginx:alpine AS production

EXPOSE 80

WORKDIR /usr/src/app-frontend

COPY ["./", "./"]

RUN apk update

RUN apk add npm

RUN npm install

RUN npm run build

RUN mv ./build/* /usr/share/nginx/html