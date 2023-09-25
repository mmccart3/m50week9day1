const User = require("../models/users");
const bcrypt = require("bcrypt");

async function hashPassword(req, res, next) {
    try {
        const saltRounds = parseInt(process.env.SALT)
        const plainTextPassword = req.body.password;
        const hashedPassword = await bcrypt.hash(plainTextPassword,saltRounds)
        req.body.password = hashedPassword;
        next();
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: error.message,
            error: error
        })
    }
};

async function passwordCheck(req, res, next) {
    try {
        const userDetails = await User.findOne({where: {username: req.body.username}})
        console.log(userDetails);
            if(userDetails !== null){
                var hashedPassword = userDetails.password;
            } else {
                var hashedPassword = "Dummy"
            }
            const plainTextPassword = req.body.password;
            const match = await bcrypt.compare(plainTextPassword,hashedPassword);
        
        if (match && userDetails) {
            console.log("password & username match");
            next()
            } else {
                throw new Error("Password and username do not match");
            };
        }
    catch (error) {
        console.log(error);
        res.status(501).json({
            message: error.message,
            error: error
        });
    }
}

module.exports = {
    hashPassword,
    passwordCheck
};