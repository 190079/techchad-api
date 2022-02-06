const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    username : {
        type: String,
        required: true, 
        unique: true

    },
    password : {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
        required: true
    },
    token: {
        type: String,
    }
});

const UserModel = mongoose.model("Users",Userschema);

module.exports = UserModel;