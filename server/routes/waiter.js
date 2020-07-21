var express = require("express");
var waitersTable = require("../Model/Waiters");

var router = express.Router();

//Create a Waiter
router.post("/", async(req,res)=>{
  try {
      const { body } = req
      let waiter = await waitersTable.create({waiterName:body.waiterName, waiterAge:body.waiterAge,
          waiterMobile:body.waiterMobile, waiterRating: body.waiterRating, waiterExperience: body.waiterExperience})
      res.send(waiter)
  } catch (error) {
      console.log(error)
  }
})


//Find All Waiter
router.get("/",async(req,res)=>{
  try {
      let table = await waitersTable.findAll();
      res.send(table)
  } catch (error) {
      console.log(error)
  }
})


//Edit a Waiter
router.put("/edit/:id", async(req,res)=>{
  try {
      const { body,params } = req
      let waiter = await waitersTable.update({waiterName:body.waiterName, waiterAge:body.waiterAge,
          waiterMobile:body.waiterMobile, waiterRating: body.waiterRating, waiterExperience: body.waiterExperience},{
          where : { id : params.id }});
          res.send(waiter)
      } catch (error) {
          console.log(error)
      }
  } )
  
  //Delete an Waiter
  router.delete("/delete/:id", async(req,res)=>{
      try {
          const { params } = req
          await waitersTable.destroy({where : {id : params.id}})
          res.send("waiter deleted")
      } catch (error) {
          console.log(error)
      }
  } )
  
     


module.exports = router;