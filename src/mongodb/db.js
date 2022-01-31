
const mongoose = require("mongoose");
const conf = require("./mongo_var")
// Replace this with your MONGOURI.
const MONGOURI ="mongodb://"+conf.user+":"+conf.pass+"@"+conf.URL+":27017/"+conf.DB;
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI); 
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;