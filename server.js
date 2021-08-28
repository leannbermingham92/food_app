const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const logger = require("morgan");
// const mongoose = require("mongoose");
//
// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);

const config = require("./config");
const postsRouter = require("./public/post.js");

app.use(logger("dev"));

const dbUrl = config.dbUrl;
console.log(dbUrl)

let options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
// mongoose.connect(dbUrl, options, (err) => {
//     if (err) console.log(err);
// });

app.use(express.static("public"));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/posts", postsRouter);


app.listen(8080, () => {
    console.log("Server running on port 8080");
});

module.exports = app;