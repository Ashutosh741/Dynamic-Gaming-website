const mongoose = require("mongoose")
const Detail = mongoose.Schema({
    brandName : String,
    branIconUrl : String,
    links:[{
        label : String,
        url : String,
    }]
})

module.exports = mongoose.model("detail",Detail)
