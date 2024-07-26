import express from "express";
import { getUsers, Login, Logout, Register, updateUser, getUserById, forgetPasswordToken } from "../controller/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();


router.get("/users",verifyToken ,getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken)
router.delete("/logout", Logout)
router.get("/user/:id", getUserById)
router.put("/updateuser/:id", verifyToken,updateUser)
router.post("/forget-password-token", forgetPasswordToken);
// router.put("/reset-password", passwordReset);
export default router;