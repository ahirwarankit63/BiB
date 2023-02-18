const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

const errorMiddleWare = require("./middleware/error")

app.use(express.json());
app.use(cookieParser());

// Routes Imports

// importing product routes
const product = require("./routes/productRoute");


//  importing user routes
const user = require("./routes/userRoute");

// importing order routes
const order = require("./routes/orderRoute");


app.use("/api/v1",product);
app.use("/api/v1", user);
app.use("/api/v1", order);

// Middle ware for errors
app.use(errorMiddleWare);



module.exports = app