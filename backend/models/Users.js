import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import crypto from "crypto";

const {DataTypes} = Sequelize;

const Users = db.define("users",{
          name: {
               type : DataTypes.STRING,
          },
          email: {
               type : DataTypes.STRING,
          },
          password: {
               type : DataTypes.STRING,
          },
          image: {
               type: DataTypes.STRING,
               // allowNull: false
          },
          cover: {
               type: DataTypes.STRING,
               // allowNull: false
          },
          url: {
               type: DataTypes.STRING,
               // allowNull: false
          }
     }, {
          freezeTableName: true
     } )

     Users.associate = (models) => {
          Users.hasMany(models.Posts, {
               onDelete: "cascade",
          })
     }

     // Users.methods.createPasswordResetToken = async function () {
     //      const resetToken = crypto.randomBytes(32).toString("hex");
     //      this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest("hex");
     //      this.passwordResetExpire = Date.now() + 30 * 60 * 1000;
     
     //      return resetToken;
     // }
     

   export default Users;
