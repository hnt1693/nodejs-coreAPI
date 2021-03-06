var express = require('express');
var router = express.Router();
const {ObjectId, MongoServerError} = require("mongodb");
const NotFoundException = require("../src/error-handler/exception");
const UserService = require("../src/service/user-service")
const Exception = require("../src/error-handler/exception");
const {errorTransporter, combineError} = require("../src/error-handler/handle-error");
const ErrorCode = require("../src/error-handler/error-code");
const authVerify = require("../src/security/middleware-auth")

/**
 * GET ALL USER API
 **/
router.get('/', authVerify, async function (req, res, next) {
    try {
        res.status(200).send(await UserService.getInfo(req));
    } catch (err) {
        console.log(err)
        errorTransporter(next, err, ErrorCode.USERS_ERROR_CODE)
    }

});


/**
 * CREATE API
 **/
router.post('/', async function (req, res, next) {
    try {
        res.status(200).send(await UserService.create(req.body));
    } catch (err) {
        errorTransporter(next, err, ErrorCode.USERS_ERROR_CODE)
    }
});

module.exports = router;
