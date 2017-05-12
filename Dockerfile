FROM ubuntu/node:v1

MAINTAINER Dilip Kumar <dilipkumar@hakunamatata.in>

COPY . /usr/src/app/
RUN cd /usr/src/app
RUN npm install

ENV MODE dev
WORKDIR /usr/src/app


EXPOSE 4038

#CMD ["node", "RESTLauncher.js"]

