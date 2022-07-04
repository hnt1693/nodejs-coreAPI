/**
 * Custom error handler to standardize error objects returned to
 * the client
 *
 * @param err Error caught by Express.js
 * @param req Request object provided by Express
 * @param res Response object provided by Express
 * @param next NextFunction function provided by Express
 */
function handleError(err, req, res, next) {
    // if (!(err instanceof CustomError)) {
    //     customError = new CustomError(
    //         'Oh no, this is embarrasing. We are having troubles my friend'
    //     );
    // }
    // we are not using the next function to prvent from triggering
    // the default error-handler. However, make sure you are sending a
    // response to client to prevent memory leaks in case you decide to
    // NOT use, like in this example, the NextFunction .i.e., next(new Error())
    console.log(err.message)
    res.status(400).send({code:101,msg:null});
}

module.exports = handleError;