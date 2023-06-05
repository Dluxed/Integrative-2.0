const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const port = 3000;

//const url = "";//

async function connect(){
    try {
        await mongoose.connect(url)
        console.log("Vive debajo de una piña del mar")
    } catch (error) {
        console.log("Valio we " + error)
    }
}

connect();