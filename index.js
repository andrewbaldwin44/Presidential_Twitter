"use strict";

const path = require('path')
const express = require("express");
const http = require('http');
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = process.env.PORT || 4000;

const app = express();

const server = http.Server(app);
const socket = require('socket.io');
const io = socket(server);

const {
  handleSockets
} = require('./server/handlers/handleSockets');

const {
  setTwitterRules
} = require('./server/handlers/handlerTwitter');

io.on('connection', socket => handleSockets(socket, io));

app
.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
})
.use(morgan("tiny"))
.use(express.static("./server/assets"))
.use(bodyParser.json())
.use(express.urlencoded({ extended: false }))
.use("/", express.static(__dirname + "/"))

.get('/twitter/set/:rule', setTwitterRules);

if (process.env.PRODUCTION) {
  app
  .use(express.static(__dirname))
  .use(express.static(path.join(__dirname, 'build')))

  .get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })
}

server.listen(PORT, () => console.info(`Listening on port ${PORT}`));
