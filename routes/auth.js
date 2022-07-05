var express = require('express');
var router = express.Router();
const {ObjectId, MongoServerError} = require("mongodb");
const NotFoundException = require("../src/error-handler/exception");
const UserService = require("../src/service/user-service")
const Exception = require("../src/error-handler/exception");
const {errorTransporter, combineError} = require("../src/error-handler/handle-error");
const ErrorCode = require("../src/error-handler/error-code");
const authVerify = require("../src/security/middleware-auth")
const AuthService = require("../src/service/auth-service")


/**
 * LOGIN
 **/
router.post('/', async function (req, res, next) {
    try {
        res.status(200).send(await AuthService.login(req.body));
    } catch (err) {
        errorTransporter(next, err, ErrorCode.USERS_ERROR_CODE)
    }
});

router.post('/register', async function (req, res, next) {
    try {
        res.status(200).send(await AuthService.register(req.body));
    } catch (err) {
        console.log(err)
        errorTransporter(next, err, ErrorCode.USERS_ERROR_CODE)
    }
});

module.exports = router;
