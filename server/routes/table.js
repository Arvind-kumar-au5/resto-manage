var express = require("express");
var tablesTable = require("../Model/Tables");
var router = express.Router();

router.post("/", async(req,res)=>{
  try {
      const { body } = req
      let table = await tablesTable.create({tableName:body.tableName, seatingStrength:body.seatingStrength,
          floorNumber:body.floorNumber})
      res.send(table)
  } catch (error) {
      console.log(error)
  }
})


//Find All Table
router.get("/",async(req,res)=>{
  try {
      let table = await tablesTable.findAll();
      res.send(table)
  } catch (error) {
      console.log(error)
  }
})


//Edit a Table
router.put("/edit/:id", async(req,res)=>{
  try {
      const { body,params } = req
      let table = await tablesTable.update({tableName:body.tableName, seatingStrength:body.seatingStrength,
          floorNumber:body.floorNumber},{
          where : { id : params.id }});
          res.send(table)
      } catch (error) {
          console.log(error)
      }
  } )
  
  //Delete an Table
  router.delete("/delete/:id", async(req,res)=>{
      try {
          const { params } = req
          await tablesTable.destroy({where : {id : params.id}})
          res.send("table deleted")
      } catch (error) {
          console.log(error)
      }
  } )
  
     


module.exports = router;
