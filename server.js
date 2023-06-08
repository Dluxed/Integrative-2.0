const express = require ('express')
const app = express()
const port = 3000
const mongoose = require ("mongoose")

const url = "mongodb+srv://Jesus:ssd3s2gg@cluster0.vzmiwjw.mongodb.net/";

async function connect(){
    try{
         await mongoose.connect(url)
         console.log("Conecto prieto");
    }catch(error){
        console.log("Nel mani, no detecto nada"+ error);
    }
}

connect();