require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./routes/routes");
const User = require("./models/users");

const port = process.env.PORT || 5001;

function syncTables() {
    User.sync();
    // creates the user table if it does not already exist otherwise it does nothing
    // options includes alter: true and force: true if you change the model in model.js
}
app.use(express.json());
// converts incoming request to json objects. This must run before app.use(userRouter)
app.use(userRouter);
// This activates the routes setup in routes.js

app.get("/health", (req,res) => {
    res.status(200).json({
        message: "This API is alive and healthy"
    })
});

app.listen(port,() => {
    // starts the server listening on its incoming private port
    console.log(`Server is listening on port ${port}`);
    // send confirmatory message to console so you know your server is working
    syncTables();
    // runs the sync tables above to initialise the connection to the database
});