import Comments from "../models/Comments.js"
import Posts from "../models/Posts.js";
import Users from "../models/Users.js";


export const getComment = async(req,res) => {
     try{
     const postId = req.params.postId;
     const comments = await Comments.findAll({where: {postId: postId}, include: [Users]});
     res.json(comments)
     }catch(error){
          console.log(error);
     }
 }


 export const sendComment = async(req,res)=>{
      try{
          const comment = req.body;

          await Comments.create(comment); 
          return res.json({message: "نظر با موفقیت اضافه شد"})
      }catch(err){
           console.log(err);
      }
 }
