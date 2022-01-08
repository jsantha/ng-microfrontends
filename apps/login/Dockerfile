FROM nginx:1.21.5-alpine

ENV APP_DIR /usr/share/nginx/html

COPY ./dist $APP_DIR
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
