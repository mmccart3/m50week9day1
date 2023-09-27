const {Router} = require("express");
const userRouter = Router();
// renames router to userRouter

const {registerUser,listAllUsers,deleteUser, updatePassword, loginUser} = require("../controllers/controllers");
// all controller functions used need to be imported
const {hashPassword,passwordCheck,tokenCheck} = require("../middleware");
// all middleware functions used need to be imported

userRouter.post("/users/register",hashPassword,registerUser);
//UserRouter takes 3 parameters, firstly the path name
userRouter.get("/users/login", passwordCheck, loginUser);
userRouter.get("/users/listAllUsers", tokenCheck, listAllUsers);
userRouter.delete("/users/deleteUser", passwordCheck, deleteUser);
userRouter.put("/users/updatePassword", passwordCheck, updatePassword);

module.exports = userRouter;