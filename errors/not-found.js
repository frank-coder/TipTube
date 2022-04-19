const { StatusCodes } = require("http-status-code")
const CustomAPIError = require("./custom-error")


class NotFoundError extends CustomAPIError{
    constructor (message){
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}

module.exports = NotFoundError