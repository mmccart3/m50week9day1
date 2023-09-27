const User = require("../models/users");
const bcrypt = require("bcrypt");

async function registerUser (req, res) {
    try {
        console.log(req.body);
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        // sequelize create method is in the eqivalent of SQL insert
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
        //sequelize findAll equivalent to select * in SQL
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

async function deleteUser(req,res) {
    try {
        const deleteResult = await User.destroy({
            where: {
                username: req.body.username
            }
        })
        //sequelize destroy method
        console.log(deleteResult);
        //analyse deleteResult, could you put a check on this in your code isntead of just logging it?
        res.status(200).send(`${req.body.username} has been deleted`);
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: error.message,
            detail: error
        })
    }
    
}

async function updatePassword(req,res) {
    try {
        const saltRounds = parseInt(process.env.SALT);
        const plainTextPassword = req.body.newPassword;
        const hashedPassword = await bcrypt.hash(plainTextPassword,saltRounds);
        //These three lines of code come from hasPassword function in middleware. Can you re-factor them
        //so as to use the middleware?
        const updateResult = await User.update({
            password: hashedPassword
        },{
            where: {
                username: req.body.username
            }
        });
        //sequelize update method
        console.log(updateResult);
        //analyse updateResult, could you put a check on this in your code isntead of just logging it?
        res.status(200).send("Password successfully updated");
        //.send used in lieu of .json both are completely acceptable .send is wee bit more flexible
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: error.message,
            detail: error
    })
}
}

module.exports = { registerUser, listAllUsers, deleteUser, updatePassword }
