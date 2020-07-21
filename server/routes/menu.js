var express = require('express');
var router = express.Router();

const menusTable = require('../Model/Menu')




//Create a Menu
router.post("/", async(req,res)=>{
    try {
        const { body } = req
        let menu = await menusTable.create({itemName:body.itemName, cuisineName:body.cuisineName,
            foodType:body.foodType, itemPrice: body.itemPrice})
        res.send(menu)
    } catch (error) {
        console.log(error)
    }
})


//Find All Menu
 router.get("/",async(req,res)=>{
    try {
        let table = await menusTable.findAll();
        res.send(table)
    } catch (error) {
        console.log(error)
    }
})


//Edit a Menu
router.put("/edit/:id", async(req,res)=>{
    try {
        const { body,params } = req
        let menu = await menusTable.update({itemName:body.itemName, cuisineName:body.cuisineName,
            foodType:body.foodType, itemPrice: body.itemPrice},{
            where : { id : params.id }});
            res.send(menu)
        } catch (error) {
            console.log(error)
        }
    } )
    
    //Delete an Menu
    router.delete("/delete/:id", async(req,res)=>{
        try {
            const { params } = req
            await menusTable.destroy({where : {id : params.id}})
            res.send("menu deleted")
        } catch (error) {
            console.log(error)
        }
    } )
    
       


 module.exports = router;