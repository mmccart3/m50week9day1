const User = require("../models/users");

async function registerUser (req, res) {
    try {
        console.log(req.body);
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json({
            message: "User Registered in the database",
            user: {
                username: req.body.username,
                email: req.body.email
            }
        })
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: error.message,
            detail: error
        })
    }
};

module.exports = {registerUser}