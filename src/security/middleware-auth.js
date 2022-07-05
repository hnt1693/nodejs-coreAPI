const jwt = require("jsonwebtoken");
const Exception = require("../error-handler/exception");

const config = process.env;

const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return next(new Exception("Authorized"))
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN);
        req.user = decoded;
    } catch (err) {
        console.log(err)
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyToken;