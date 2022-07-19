const express = require("express");

const app = express();

const errorMiddleWare = require("./middleware/error")

app.use(express.json());

// Routes Imports
const product = require("./routes/productRoute");

app.use("/api/v1",product);

// Middle ware for errors
app.use(errorMiddleWare);



module.exports = app