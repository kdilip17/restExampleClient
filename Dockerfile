FROM harbor.liad.in:5000/alpinenode:latest

MAINTAINER Dilip Kumar <dilipkumar@hakunamatata.in>

COPY . /usr/src/app/
RUN cd /usr/src/app
RUN pwd
RUN ls
RUN npm install

ENV MODE dev
WORKDIR /usr/src/app


EXPOSE 4041

#CMD ["node", "RESTLauncher.js"]

