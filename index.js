
const express = require('express');
const bodyparser = require('body-parser');
const projects = require('./src/functions/Projects');
const InitiateMongoServer = require('./src/mongodb/db');

InitiateMongoServer();

const app = express();
const port =  1414;

app.use(express.json());


app.get('/', (req, res) => {
  res.json({"test" : "successful"});
});


app.use("/projects",projects);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
