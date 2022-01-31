const mongoose = require('mongoose');

const Projectschema = new mongoose.Schema({
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

const ProjectsModel = mongoose.model("Projects",Projectschema);

module.exports = ProjectsModel;