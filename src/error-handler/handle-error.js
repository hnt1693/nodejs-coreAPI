const Exception = require("./exception");
const ErrorCode = require("./error-code");

function errorTransporter(next, err, errorType) {
    if (err.name === 'ValidationError') {
        for (field in err.errors) {
            return next(new Exception(err.name, err.errors[field].message, ErrorCode[err.errors[field].message]))
        }
    } else if (err.name === "MongoServerError") {
        let errorCode;
        switch (err.code) {
            case ErrorCode.UNIQUE_CODE: {
                errorCode = combineError(errorType, Object.keys(err.keyPattern)[0], ErrorCode.TYPE.UNIQUE);
                break;
            }
        }
        return next(new Exception(err.name, errorCode, ErrorCode[errorCode]))
    }
    return next(err);
}

function combineError(error, field, type) {
    return `${error.ENTITY}${error.FIELD[field]}${type}`
}

module.exports = {errorTransporter, combineError}