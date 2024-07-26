import { Sequelize } from "sequelize";

const db = new Sequelize("arnia", "fateme", "fateme369", {
     host: "localhost",
     dialect: "mysql",
});


export default db;