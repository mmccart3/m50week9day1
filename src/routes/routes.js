const {Router} = require("express");
const userRouter = Router();
const {registerUser} = require("../controllers/controllers");

userRouter.post("/users/register",registerUser);
// userRouter.get("/users/listAllUsers", listAllUsers);
// userRouter.delete("/users/deleteUser", deleteUser);
// userRouter.put("/users/updatePassword", updatePassword);

module.exports = userRouter;