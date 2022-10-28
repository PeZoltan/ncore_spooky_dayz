FROM node:16-alpine
RUN addgroup -S foo && adduser -S foo -G foo
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
USER foo
CMD [ "node", "app.js" ]
