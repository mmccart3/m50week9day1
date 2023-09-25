const {Router} = require("express");
const userRouter = Router();
const {registerUser,listAllUsers} = require("../controllers/controllers");
const {hashPassword,passwordCheck} = require("../middleware");

userRouter.post("/users/register",hashPassword,registerUser);
userRouter.get("/users/listAllUsers",passwordCheck, listAllUsers);
// userRouter.delete("/users/deleteUser", deleteUser);
// userRouter.put("/users/updatePassword", updatePassword);

module.exports = userRouter;