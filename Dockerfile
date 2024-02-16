FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build


EXPOSE 8080
CMD [ "http-server", "dist" ]

# docker build -t tkm-web-app .
# docker run -it -p 8080:8080 --rm --name tkm-web-app tkm-web-app
# docker save -o ./docker-image-tkm-web-app/tkm-web-app-img tkm-web-app
# docker load -i tkm-web-app-img 