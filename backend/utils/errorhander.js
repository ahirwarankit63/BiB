class ErrorHander extends Error{
    constructor (message, statusCode ){
        super( message );       
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = ErrorHander


// for implement we need a middleware ... therefore we exported it in middle ware folder 