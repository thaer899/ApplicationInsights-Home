'use strict';

const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const app = express();
const appInsights = require("applicationinsights");

// Constants
const PORT = 8080;
const MONGO_PORT = 27017;

appInsights.setup(process.env.AI_KEY).start();

app.get('/events', function (req, res) {
  res.status(200).send([])
})

app.get('/checkdb', function (req, res) {
  // Connection URL
  var mongoPort = process.env.MISTRAL_MONGO_PORT;
  if (mongoPort) {
    mongoPort = mongoPort.substr(6);
  } else {
    mongoPort = "mongo:" + MONGO_PORT;
  }
  var url = "mongodb://unit_test_user:run@" + mongoPort;
  mongoClient.connect(url, function (err, db) {
    if (err) {
      res.status(500).send(err.toString());
    }
    else {
      res.status(200).send("ok");
    }
    if (db) {
      db.close();
    }
    return;
  });
}
)

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT.toString() + '!')
})