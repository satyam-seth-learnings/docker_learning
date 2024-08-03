const mongoose = require('mongoose');

console.log('hello');

const DATABASE = "mongodb://localhost:27017/testup";

mongoose.connect(DATABASE)
    .then(() => {
        console.log("DB Connected!");
    })
    .catch(() => {
        console.log("ERROR in DB Connection!");
    });