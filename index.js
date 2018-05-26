const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json()); // support json encoded bodies

app.get('/', function (req, res) {
  res.send('Hello World!')
})

module.exports.handler = serverless(app);
