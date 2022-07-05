class ResponseError {
    errorCode;
    msg;
    timestamp;
    constructor(errorCode, msg, timestamp) {
        this.errorCode = errorCode;
        this.msg = msg;
        this.timestamp = timestamp;
    }
}

module.exports = ResponseError