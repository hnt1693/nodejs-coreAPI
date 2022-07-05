const Exception = require("../error-handler/exception");
const User = require("../repository/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const UserInfo = require("../payload/user-info");
require("dotenv").config();
const login = async (userRequest) => {

        // Get user input
        const {username, password} = userRequest;

        // Validate user input
        if (!(username && password)) {
            throw new Exception("Authentication Error", "AUTH01")
        }
        // Validate if user exist in our database
        const user = await User.findOne({username});

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                {user_id: user._id, username},
                process.env.TOKEN,
                {
                    expiresIn: "2h",
                }
            );

            return new UserInfo(username,token);
        }

        throw new Exception("Authentication Error", "AUTH02")

}

const register = async (userRequest) => {
    const user = new User({username: userRequest.username, password: await bcrypt.hash(userRequest.password,10)})
    await user.save();
    return user;
}


module.exports = {register,login}