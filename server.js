const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

const port = process.env.PORT || 8080;


// cors middleware
app.use(cors());

//bodyParser middleware
app.use(bodyParser.json());

//mongodb configuration
const database = require("./config/keys").mongoURI;

// establishing connection with mongo database
mongoose.connect(database)
    .then(() => console.log("MongoDB connection established successfully!!"))
    .catch(err => console.log(err));

// use Routes
const articlesRouter = require("./routes/api/articles");
app.use("/api/articles", articlesRouter);



app.listen(port, () => {
    console.log(`Server Running on port: http//localhost:${port}`);
});