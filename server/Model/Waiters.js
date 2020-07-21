const db = require("../database");
const Sequelize = require("sequelize");

let waitersTable = db.define("waiters", {
  waiterName:{
      type: Sequelize.STRING
  },
  waiterAge:{
    type: Sequelize.INTEGER
  },
  waiterMobile:{
    type: Sequelize.BIGINT
 },
 waiterRating:{
    type: Sequelize.INTEGER
 },
 waiterExperience:{
    type: Sequelize.INTEGER
 }
 },{
 timestamps: false
 })



module.exports = waitersTable