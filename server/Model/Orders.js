var Sequelize = require("sequelize");
var db = require("../database");


const tablesTable = require("./Tables")
const waitersTable = require("./Waiters")
const menusTable = require("./Menu")


let ordersTable = db.define("orders", {
  userName:{
      type: Sequelize.STRING
  },
  userMobile:{
    type: Sequelize.BIGINT
},
totalPrice:{
    type: Sequelize.INTEGER
},
paymentMode:{
    type: Sequelize.STRING
}

},{
timestamps: false
})



waitersTable.hasMany(ordersTable,{foreignKey: "waiterID",sourceKey: "id"})
ordersTable.belongsTo(waitersTable,{foreignKey: "waiterID",targetKey: "id"})


tablesTable.hasMany(ordersTable,{foreignKey: "tableID",sourceKey: "id"})
ordersTable.belongsTo(tablesTable,{foreignKey: "tableID",targetKey: "id"})


ordersTable.hasMany(menusTable,{foreignKey: "menuID",sourceKey: "id"})
menusTable.belongsTo(ordersTable,{foreignKey: "menuID",targetKey: "id"})



module.exports = ordersTable
