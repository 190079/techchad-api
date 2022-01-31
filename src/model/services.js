const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    _id : {
        type: String,
        required: true
    },
    imageURL : {
        type: String,
        required: true
    },
    Title : {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const Services = mongoose.model("services",ServiceSchema);

module.exports = Services;