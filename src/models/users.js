const {DataTypes} = require("sequelize");
const SQLconnection = require("../db/connection");

// Each table in the databse needs to be defined like this:
// I suggest a seperate file for each table.
// By convention table name is capitalised.
const User = SQLconnection.define("User",{
    username: {
        type: DataTypes.STRING,
        // Equivalent to VARCHAR(255)
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;