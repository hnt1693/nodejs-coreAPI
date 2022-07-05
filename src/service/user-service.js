const UserSchema = require('../repository/user')
const Exception = require("../error-handler/exception");
const { ObjectId} = require("mongodb");
const {getUserInfo} = require("../security/jwt");
const UserInfo = require("../payload/user-info");
const create = async (user) => {
        const newUser = new UserSchema({username: user.username, email: user.email})
        await newUser.save();
        return newUser;
}
const getInfo = async (req)=>{
        const userInfo = getUserInfo(req);
        const user =  await UserSchema.findOne({_id: ObjectId(userInfo.user_id)});
        return new UserInfo(user.username)
}

module.exports = {create, getInfo}