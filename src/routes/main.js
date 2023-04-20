const express = require('express')
const routes = express.Router();
const Detail = require("../models/Detail")
const Slider = require("../models/Slider")
const Service = require("../models/Service")
const Contact = require("../models/Contact")
routes.get("/gallery",async(req,res)=>{
    const details = await Detail.findOne({"_id" : "643faf69ea6775c247a791f0"})
    // console.log(details)
    const slides = await Slider.find()
    // console.log(slides)
    res.render("index",{
        details : details,
        slides : slides
    })
})

routes.get("/services",async(req,res)=>{
    const details = await Detail.findOne({"_id" : "643faf69ea6775c247a791f0"})

    // console.log(details)
    const slides = await Slider.find()
    // console.log(slides)
    res.render("index",{
        details : details,
        slides : slides
    })
})

routes.get("/contact_us",async(req,res)=>{
    const details = await Detail.findOne({"_id" : "643faf69ea6775c247a791f0"})
    // console.log(details)
    const slides = await Slider.find()
    // console.log(slides)
    res.render("index",{
        details : details,
        slides : slides
    })
})





routes.get("/about",async(req,res)=>{
    const details = await Detail.findOne({"_id" : "643faf69ea6775c247a791f0"})
    // console.log(details)
    const slides = await Slider.find()
    // console.log(slides)
    res.render("index",{
        details : details,
        slides : slides
    })
})

routes.get("/",async(req,res)=>{
    const details = await Detail.findOne({"_id" : "643faf69ea6775c247a791f0"})
    // console.log(details)
    const slides = await Slider.find()

    const services = await Service.find()
    // console.log(slides)
    res.render("index",{
        details : details,
        slides : slides,
        services : services
    })

})

routes.post("/process-contact-form", async(req,res)=>{
    console.log(req.body);
    try{
        const data = await Contact.create(req.body)
        console.log(data)
        res.redirect("/")
    }catch(e){
        console.log(e)
        res.redirect("/")
    }
    // save the data to db
})


module.exports = routes;