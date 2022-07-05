const jwt = require("jsonwebtoken");
const Exception = require("../error-handler/exception");
const getUserInfo = (req) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return null;
    }
    return jwt.verify(token, process.env.TOKEN);
}

module.exports = {getUserInfo}