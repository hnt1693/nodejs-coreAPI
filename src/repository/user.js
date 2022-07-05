
const ErrorCode = require('../error-handler/error-code')
const mongoose = require('mongoose')
const validator = require('validator')
const {combineError} = require("../error-handler/handle-error");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        required: {
            value: true,
            message: combineError(ErrorCode.USERS_ERROR_CODE, "username", ErrorCode.TYPE.REQUIRED)
        },
        unique: true,
        validate:
            [
                {
                    validator:  function (v) {
                        return validator.isLength(v, {min: 2})
                    },
                    message:  combineError(ErrorCode.USERS_ERROR_CODE, "username", ErrorCode.TYPE.LENGTH)
                }
            ]
    },
    password: {
        type: String,
        required: {
            value: true,
            message: combineError(ErrorCode.USERS_ERROR_CODE, "password", ErrorCode.TYPE.REQUIRED)
        }
    }
})

module.exports = mongoose.model('Users', userSchema)