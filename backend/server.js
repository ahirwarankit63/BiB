const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database.js")

// config
dotenv.config({path:"backend/config/config.env"});

// connecting to database

connectDatabase();

const server = app.listen(process.env.PORT,() =>
(
    console.log(`server is working on http://localhost:4000`)
))


// unhandeled promise rejection 
    //means the error which is occured by the server crash...
    // to resolve it the below code will work and close the server instantly

    process.on("unhandledRejection0", err => {
        console.log(`Error  : $(err.message)`);
        console.log(`shutting down the server due to unhandeled Promise rejection`);
    
        server.close(() =>{
            process.exit(1);
        });
    })