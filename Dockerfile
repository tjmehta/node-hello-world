FROM node
ADD . /node-hello-world
ENV PORT 80
EXPOSE 80
WORKDIR /node-hello-world
CMD node server.js

# cookie
