const Sequelize = require("sequelize");
// You are connected to database "restaurant" as user "postgres" on host "localhost" (address "::1") at port "5432".
const db = new Sequelize("api", "postgres", "edu_tech", {
  host: "localhost",
  dialect: "postgres"
});

db.sync(
  {force:false}
)
db.authenticate().then(() => {
  console.log("DB connection is established");
});

module.exports = db;
