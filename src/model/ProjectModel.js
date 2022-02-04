const mongoose = require('mongoose');

const Projectschema = new mongoose.Schema({
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
    },
    link: { type: String, 
        required: true
    }
});

const ProjectsModel = mongoose.model("Projects",Projectschema);

module.exports = ProjectsModel;