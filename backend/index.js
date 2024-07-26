import express from "express";
import db from "./config/Database.js"
import userRoutes from "./routes/Users.js";
import postRoutes from "./routes/Posts.js";
import commentRoutes from "./routes/Comments.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();

try{
     // await db.authenticate();
     console.log("database connected");
     // await db.sync()
}catch(err){
     console.log(err);
}
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"))
app.use(userRoutes)
app.use(postRoutes)
app.use(commentRoutes)

app.listen(5000, ()=> {
     console.log("server running");
})



