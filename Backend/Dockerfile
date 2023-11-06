FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get update -y
RUN apt-get install -y nodejs 

COPY api api
COPY config config
COPY controllers controllers
COPY middleware middleware
COPY models models 
COPY routes routes
COPY utils utils 
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY app.js app.js
COPY server.js server.js

WORKDIR ./

RUN npm install 

ENTRYPOINT ["node","server.js"]