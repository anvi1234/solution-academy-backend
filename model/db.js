const { json } = require('body-parser');
const mongoose = require('mongoose');

// const DB = 'mongodb+srv://Sumit123:Sumit123@cluster0.cyzquqs.mongodb.net/Prominent?retryWrites=true&w=majority'
 const DB ='mongodb+srv://solutionacademy:solution123@cluster0.b7ypiwu.mongodb.net/academy?retryWrites=true&w=majority' 
mongoose.connect(DB).then(()=>{
    console.log("Mongodb connected successfully");
}).catch((err)=>{
    console.log("no connection",err);
})

require("./teacher");
require("./banner");
require("./gallery");
require("./result");

