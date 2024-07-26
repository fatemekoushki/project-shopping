import Posts from "../models/Posts.js";
import Users from "../models/Users.js";
import path from "path";
import fs from "fs";


export const getPosts = async(req,res) => {
    try{
         const cat = req.query.cat ;
         const posts = cat ? await Posts.findAll({where: {cat: cat},
          order: ['id', 'DESC']}) : await Posts.findAll({
          include: [Users],
          order: ['id', 'DESC']
     })
         
         res.json(posts);
    }catch(error){
         console.log(error);
    }
}

export const createPosts = async(req,res)=> {
     if(req.files == null) return res.json({error: "عکسی انتخاب نکردید"})
     const title = req.body.title;
     const desc = req.body.desc;
     // const cat = req.body.cat;
     const userId = req.body.userId;
     const file = req.files.file;
     const fileSize = file.data.length;
     const ext = path.extname(file.name);
	   //const dateNow = Math.round(Date.now());
   //  const fileName = dateNow + ext;
     const fileName = file.md5 + ext;
     const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
     const allowedType = ['.png', '.jpg', '.jpeg'];
     if(!allowedType.includes(ext.toLowerCase())){
          return res.json({error: "  عکس معتبر نیست *فرمت های مجاز png jpg jpeg"})
     }
     if(fileSize > 5000000) return res.json({error :"حجم عکس نباید بیشتر از 5 مگابایت باشد."})
    

     file.mv(`./public/images/${fileName}`, async(err)=> {
          if(err) return res.json({message: err.message})
          try{
               await Posts.create({title:title,desc:desc,userId:userId,image:fileName, url:url});
               res.json({message: "بلاگ با موفقیت افزوده شد"})
          }catch(err){
               console.log(err.message);
          }
     })

}


export const getPostById = async(req, res) => {
     try{
          const response = await Posts.findOne({
               where: {
                    id: req.params.id
               }
          });
          res.json(response)
     }catch(error){
          console.log(error);
     }
}

export const updatePost = async(req, res) => {
     const post = await Posts.findOne({
          where:{
              id : req.params.id
          }
      });
      if(!post) return res.status(404).json({msg: "No Data Found"});
      
      let fileName = "";
      if(req.files === null){
          fileName = post.image;
      }else{
          const file = req.files.file;
          const fileSize = file.data.length;
          const ext = path.extname(file.name);
          fileName = file.md5 + ext;
          const allowedType = ['.png','.jpg','.jpeg'];

          if(!allowedType.includes(ext.toLowerCase())){
               return res.json({error: " png jpg jpeg عکس معتبر نیست *فرمت های مجاز "})
          }
          if(fileSize > 5000000) return res.json({error:"حجم عکس نباید بیشتر از 5 مگابایت باشد."})
          const filepath = `./public/images/${post.image}`;
          fs.unlinkSync(filepath);

          file.mv(`./public/images/${fileName}`, (err)=> {
               if(err) return res.json({error: err.message})  
          });
     }
     const title = req.body.title;
     const desc = req.body.desc;
     const userId = req.body.userId;
     const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
     try{
          await Posts.update({title: title,desc:desc,userId:userId, image: fileName, url: url}, {
               where:{
                    id: req.params.id
               }
          });
          res.json({message: "محصول با موفقیت ویرایش شد."})
     }catch(err){
          console.log(err.message);
     }

}

export const getSinglePost = async(req,res)=> {
     const post = req.params.id;
     const singlePost = await Posts.findByPk(post, {
          include: [Users]
     });
     res.json(singlePost)
}


export const deletePost = async(req,res)=>{
     const post = await Posts.findOne({
          where: {
               id: req.params.id
          }
     });
     if(!post) return res.json({error: "این پست پیدا نشد"})

     try{
          const filepath = `./public/images/${post.image}`;
          fs.unlinkSync(filepath);
          await Posts.destroy({
               where:{
                    id: req.params.id
               }
          });
          res.json({ message: "پست با موفقیت حذف شد" })
     }catch(err){
          console.log(err);
     }
}



export const getMyPost = async(req, res)=>{
     try{
          const userId = req.params.userId;
          const avatar = await Posts.findAll({
               where: {userId: userId},
               include:[ {
                    model: Users,
                    attributes:['name', 'email', "url","image"],
                }
               //  {
               //       model: Likes
               //  }
               ]
                
               });
          res.json(avatar)
          }catch(error){
               console.log(error);
          }
}

export const search = async(req,res)=>{
     try{
          const cat = req.body.title ;
          // console.log(cat);
          const posts = cat ? await Posts.findAll({where: {title: cat},
           order: ['id', 'DESC'],
           include:[ {
               model: Users,
               attributes:['name', 'email', "url","image"],
           }]
          }) : ""

          res.json(posts);
     }catch(error){
          console.log(error);
     }

}