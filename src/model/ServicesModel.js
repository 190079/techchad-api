const mongoose = require('mongoose');

const Serviceschema = new mongoose.Schema({
    imageURL : {
        type: String,
        required: true
    },
    Title : {
        type: String,
        required: true
    }
});

const ServiceModel = mongoose.model("Services",Serviceschema);

module.exports = ServiceModel;