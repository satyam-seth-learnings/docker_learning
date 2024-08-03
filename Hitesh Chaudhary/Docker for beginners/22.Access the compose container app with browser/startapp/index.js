const mongoose = require('mongoose');
const express = require('express');

const app = express();

// Note to connect with mongodb we are changing localhost with mongo service name(mymongo) mention in docker-compose.yml file
// const DATABASE = "mongodb://localhost:27017/testup";
const DATABASE = "mongodb://mymongo:27017/testup";

mongoose.connect(DATABASE)
    .then(() => {
        console.log("DB Connected!");
    })
    .catch(() => {
        console.log("ERROR in DB Connection!");
    });


app.get("/", (req, res) => {
    res.json({
        message: "You are visiting ROOT route"
    });
});


app.listen(8000, () => {
    console.log("8000 is ready to serve...");
});