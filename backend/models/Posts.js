import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;
import Users from "./Users.js";
const Posts = db.define("posts",{
     title: {
          type: DataTypes.STRING,
          allowNull: false
     },
     desc: {
          type: DataTypes.STRING,
          allowNull: false
     },
     userId: {
          type: DataTypes.INTEGER,
          allowNull: false
     },
     image: DataTypes.STRING,
     url: DataTypes.STRING,

     }, {
          freezeTableName: true
     } )

     Users.hasMany(Posts);
     Posts.belongsTo(Users, {foreignKey: "userId"});
   export default Posts;
