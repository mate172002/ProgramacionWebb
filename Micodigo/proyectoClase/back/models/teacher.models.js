const { DataTypes } = require("sequelize");
const sequelize = require("../database/connec");

const Teacher = sequelize.define(
 "Teacher",
 {
   name: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   last_name: {
    allowNull: false,
   },
   email: {
    type: DataTypes.STRING,
    allowNull: false,
   },
 },
 {
   timestamps: false,
   tableName: "teacher", 
 }
);
module.exports = Teacher;