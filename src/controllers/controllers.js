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

async function listAllUsers (req,res) {
    try {
        const listOfUsers = await User.findAll();
        res.status(200).json({
            message: "All users from the database are:",
            userlist: listOfUsers
        });
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: error.message,
            detail: error
        })
    }
}

module.exports = {registerUser,listAllUsers}