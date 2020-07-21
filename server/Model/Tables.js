const db = require("../database");
const Sequelize = require("sequelize");

let tablesTable = db.define("tables", {
  seatingStrength:{
      type: Sequelize.INTEGER
  },
  tableName:{
    type: Sequelize.STRING
  },
  floorNumber:{
    type: Sequelize.INTEGER
  }
  },{
  timestamps: false
  })



module.exports = tablesTable