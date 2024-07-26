import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Posts from "./Posts.js";
import Users from "./Users.js";
const {DataTypes} = Sequelize;

const Comments = db.define("comments",{
     commentBody: {
          type: DataTypes.STRING,
          allowNull: false
     },
     postId :{
          type: DataTypes.INTEGER,
          allowNull: false
     },
     userId :{
          type: DataTypes.INTEGER,
          allowNull: false
     }
     }, {
          freezeTableName: true
     } )

     Posts.hasMany(Comments);
     Comments.belongsTo(Posts, {foreignKey: "postId"});
     Users.hasMany(Comments);
     Comments.belongsTo(Users, {foreignKey: "userId"});
export default Comments;
