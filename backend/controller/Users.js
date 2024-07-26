import Users from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs";
import { Sequelize } from "sequelize";
import nodemailer from "nodemailer";
import crypto from "crypto";

export const getUsers = async(req,res) => {
     try{
          const users = await Users.findAll({
                    order: [
                         Sequelize.fn( 'RAND' ),
                       ],
               attributes : ["id", "name", "email", "url"]
          });
          res.json(users);
     }catch(error){
          console.log(error);
     }
}

export const Register = async(req,res)=> {
     const {name, email, password, confPassword}= req.body;
     const found = await Users.findOne({
          where: {
            email: email
          }
        });
        if (found) {
          return res.json({error: "ایمیل قبلا ثبت نام کرده است"});
        }
     if(password !== confPassword){
          return res.json({error: "پسوورد و تکرار آن با هم برابر نیستند."});
     }
     const salt = await bcrypt.genSalt();
     const hashPassword = await bcrypt.hash(password, salt);
     try{
        
          await Users.create({
               name: name,
               email: email,
               password:hashPassword
          })
          res.json({message: "ثبت نام موفقیت آمیز بود"})
     }catch(error){
        console.log(error);
     }
}

export const Login = async(req, res) => {
     try{
          const user = await Users.findAll({
               where:{
                    email: req.body.email
               }
          });
          const match = await bcrypt.compare(req.body.password, user[0].password)
          if(!match) return res.json({error: "پسوورد اشتباه است"});
          const userId = user[0].id;
          const name = user[0].name;
          const email = user[0].email;
         
          res.json({userId,name,email, message: "شما با موفقیت وارد شدید."})
     }catch(error){
          res.json({error: "کاربر وجود ندارد"})
     }
}


export const Logout = async(req,res)=> {
     const refreshToken = req.cookies.refreshToken;
     if(!refreshToken) return res.sendStatus(204);
     const user = await Users.findAll({
          where: {
               refresh_token: refreshToken
          }
     });
     if(!user[0]) return res.sendStatus(204);
     const userId = user[0].id;
     await Users.update({refresh_token: null}, {
          where: {
               id: userId
          }
     });
     res.clearCookie("refreshToken");
     return res.sendStatus(200);
}

export const getUserById = async(req, res) => {
     try{
          const response = await Users.findOne({
               where: {
                    id: req.params.id
               },
               attributes : ["id", "name", "email", "image", "url", "cover"],
          });
          res.json(response)
     }catch(error){
          console.log(error);
     }
}

export const updateUser = async(req,res) => {
     const avatar = await Users.findOne({
          where:{
              id : req.body.id
          }
      });
      if(!avatar) return res.status(404).json({msg: "No Data Found"});
      
      let fileName = "";
      if(req.files === null){
          fileName = avatar.image;
      }else{
          const file = req.files.file;
          const fileSize = file.data.length;
          const ext = path.extname(file.name);
          fileName = file.md5 + ext;
          const allowedType = ['.png','.jpg','.jpeg'];

          if(!allowedType.includes(ext.toLowerCase())){
               return res.json(" png jpg jpeg عکس معتبر نیست *فرمت های مجاز ")
          }
          if(fileSize > 5000000) return res.json("حجم عکس نباید بیشتر از 5 مگابایت باشد.")
          if(avatar.image){
               const filepath = `./public/avatars/${avatar.image}`;
               fs.unlinkSync(filepath);

          }
         
          file.mv(`./public/avatars/${fileName}`, (err)=> {
               if(err) return res.json({msg: err.message})  
          });
     }
     const name = req.body.name
     const url = `${req.protocol}://${req.get("host")}/avatars/${fileName}`;
     try{
          await Users.update({ name:name, image: fileName, url: url}, {
               where:{
                    id: req.body.id
               }
          });
          res.json({msg: "کاربر با موفقیت ویرایش شد."})
     }catch(err){
          console.log(err.message);
     }
}





const transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
       user: "exort1398@gmail.com",
       pass: "ypwwaxnqhiiaxqco",
     },
   });
   
   export const forgetPasswordToken = async (req, res) => {
     const email = req.body.email;
     const user = await Users.findOne({ email });
     if (!user) throw new Error("کاربر وجود ندارد ");
     try {
       const token = await user.createPasswordResetToken();
       await user.save();
   
       const resetUrl = `این ایمیل برای تغییر رمز حساب کاربری شما ارسال شده است, برای تغییر رمز روی لینک زیر کلیک کنید 
            <a href="http://localhost:3000/reset-password/${token}">تایید حساب</a>`;
   
       let details = {
         from: "exort1398@gmail.com",
         to: email,
         subject: "تغییر رمز عبور",
         html: resetUrl,
       };
       await transporter.sendMail(details, (err) => {
         if (err) {
           res.json(err);
         } else {
           res.json({ msg: `ایمیل تاییدی برای ${user.email} ارسال شد` });
         }
       });
     } catch (error) {
       res.json(error);
     }
   };