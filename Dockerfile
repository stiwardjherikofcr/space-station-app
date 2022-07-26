### STAGE 1:BUILD ###
FROM node:latest as build
WORKDIR /app
COPY ./ /app/
RUN npm install
ARG configuration=production
RUN npm run build -- --configuration=$configuration

### STAGE 2:RUN ###
FROM nginx:latest as nginx
COPY --from=build /app/dist/space-station-app /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 8090