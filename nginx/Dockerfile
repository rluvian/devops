FROM nginx

RUN rm /etc/nginx/nginx.conf

COPY nginx.conf /etc/nginx

EXPOSE 80
# RUN ln -s /etc/nginx/sites-available/nginx.conf /etc/nginx/sites-enabled/

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]