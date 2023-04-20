const express = require("express")
const app = express();
const PORT = process.env.PORT || 5556;
const hbs = require("hbs");
const routes = require('./routes/main')
const mongoose  = require("mongoose")
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const Service = require("./models/Service")
const bodyParser = require("body-parser")
mongoose
 .connect(
  "mongodb+srv://aashutoshmishra296:aSHUTOSH%4012@cluster0.mml9qev.mongodb.net/website_tut?retryWrites=true&w=majority",
  {
   useNewUrlParser: true,
   autoIndex: true,
   useUnifiedTopology: true,
  }
 )
 .then(() => 
    console.log("connected to db "),
    // Service.create([
    //     {
    //         image : "/static/images/t1.webp",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     },
    //     {
    //         image : "/static/images/t2.webp",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     },
    //     {
    //         image : "/static/images/t3.webp",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     },
    //     {
    //         image : "/static/images/t4.webp",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     },
    //     {
    //         image : "/static/images/t5.webp",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     },
    //     {
    //         image : "/static/images/t6.webp",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     },
    //     {
    //         image : "/static/images/t7.jpg",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     },
    //     {
    //         image : "/static/images/t8.jpg",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     },
    //     {
    //         image : "/static/images/t9.jpg",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     },
    //     {
    //         image : "/static/images/t10.jpg",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     },
    //     {
    //         image : "/static/images/t11.jpg",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     },
    //     {
    //         image : "/static/images/t12.webp",
    //         description : "You Gotta See Pokèmon In 'HD-2D,' A Reinvention Of The Classic Games"
    //     }
    // ])
    // Slider.create([
    //     {
    //         title : "Dead Island 2 Review - Eat The Rich",
    //         subTitle : "Coming Apr 21, 2023",
    //         imageUrl : "/static/images/b1.jpg"
    //     },
    //     {
    //         title : "PlayStation Plus Game Catalog Has 16 More Games Now",
    //         subTitle : "Kena: Bridge of Spirits, Doom Eternal, and Bassmaster Fishing are available now via the PS Plus Game Catalog.",
    //         imageUrl : "/static/images/b2.jpg"
    //     },
    //     {
    //         title : "Immortals of Aveum – Official Cinematic Reveal Trailer",
    //         subTitle : "Coming Apr 21, 2023",
    //         imageUrl : "/static/images/b3.jpg"
    //     },
    //     {
    //         title : "Redfall - The Cryptid Hunter | Devinder Hero Gameplay Trailer",
    //         subTitle : "Coming Apr 21, 2023",
    //         imageUrl : "/static/images/b4.jpg"
    //     },

    // ])
    )
 
 .catch((e) => console.log(e));


//middlewares
app.use(bodyParser.urlencoded({
    extended  :true 
}))
app.use("/static",express.static("public"))
app.use("",routes)



//  template engine : their are many template engines like pug or hbs we can use any
app.set("view engine",'hbs')
app.set("views","views") // here we are not using __dirname because views folder is not in parallel with app.js folder
hbs.registerPartials("views/partials")


app.get("/about",(req,res)=>{
    res.send("wow this is data from server")

})

app.listen(PORT, ()=>{
    console.log("server started => ", PORT);
})