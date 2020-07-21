const db = require("../database");
const Sequelize = require("sequelize");

let menusTable = db.define("menus", {
  itemName:{
      type: Sequelize.STRING
  },
  cuisineName:{
    type: Sequelize.STRING
  },
  foodType:{
    type: Sequelize.STRING
  },
  itemPrice:{
    type: Sequelize.INTEGER
  }
  },{
    timestamps: false
  })



module.exports = menusTable
