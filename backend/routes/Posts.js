import express from "express";
import { getPosts, createPosts,updatePost, getSinglePost, deletePost,getMyPost,getPostById,search} from "../controller/Posts.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();


router.get("/posts",getPosts);
router.post("/posts",createPosts);
router.get("/posts/:id",getSinglePost);
router.put("/posts/:id",updatePost);
router.delete("/posts/:id",deletePost);
router.get("/posts/mypost/:userId",getMyPost);
router.get("/posts/edit/:id",getPostById);
router.post("/search",search);


export default router;