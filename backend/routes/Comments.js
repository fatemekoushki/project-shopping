import express from "express";
import { getComment, sendComment} from "../controller/Comments.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();


router.get("/comments/:postId", getComment)
router.post("/comments" ,sendComment)


export default router;