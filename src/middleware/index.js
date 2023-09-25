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
}

module.exports = hashPassword;