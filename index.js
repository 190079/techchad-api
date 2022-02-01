
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const projects = require('./src/functions/Projects');
const InitiateMongoServer = require('./src/mongodb/db');

InitiateMongoServer();

const app = express();
app.use(cors({
  origin: "*",
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port =  1414;

app.use(express.json());


app.get('/', (req, res) => {
  res.json({"test" : "successful"});
});

app.use("/projects",projects);
app.use("/images",express.static('./src/public/images/'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
