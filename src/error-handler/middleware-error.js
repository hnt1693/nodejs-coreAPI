/**
 * Custom error handler to standardize error objects returned to
 * the client
 *
 * @param err Error caught by Express.js
 * @param req Request object provided by Express
 * @param res Response object provided by Express
 * @param next NextFunction function provided by Express
 */

const Exception = require("./exception");
const ResponseError = require("./response-error");

function handleError(err, req, res, next) {

    if (err instanceof Exception) {
        if(err.name==="Authorized"){
            return res.status(403).send(new ResponseError(403, "Forbidden", Date.now()));
        }
        return res.status(400).send(new ResponseError(err.code, err.msg, Date.now()));
    }
    res.status(400).send(new ResponseError(err));
    return next();
}

module.exports = handleError;