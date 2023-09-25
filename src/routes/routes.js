const {Router} = require("express");
const userRouter = Router();
const {registerUser} = require("../controllers/controllers");
const hashPassword = require("../middleware");

userRouter.post("/users/register",hashPassword,registerUser);
// userRouter.get("/users/listAllUsers", listAllUsers);
// userRouter.delete("/users/deleteUser", deleteUser);
// userRouter.put("/users/updatePassword", updatePassword);

module.exports = userRouter;