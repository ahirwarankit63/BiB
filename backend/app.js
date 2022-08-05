const express = require("express");

const app = express();

const errorMiddleWare = require("./middleware/error")

app.use(express.json());

// Routes Imports

// importing product routes
const product = require("./routes/productRoute");


//  importing user routes
const user = require("./routes/userRoute");


app.use("/api/v1",product);
app.use("/api/v1", user);

// Middle ware for errors
app.use(errorMiddleWare);



module.exports = app