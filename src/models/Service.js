const mongoose = require("mongoose")
const Service = mongoose.Schema({
    image : String,
    description : String,
})

module.exports = mongoose.model("service",Service)