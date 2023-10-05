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
        allowNull: false,
        validate: {
            is:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
			// isEmail: true,
			len: [1,255]
		}
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;