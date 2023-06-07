const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const port = 3000;
const {MongoClient} = require("mongodb");
const dbName = "DrStone";
require ('dotenv').config()

const url = process.env.URI_MONGO;

async function connect(){
    try {
        await mongoose.connect(url)
        console.log("Vive debajo de una piña del mar")
    } catch (error) {
        console.log("Valio we " + error)
    }
}

const client = new MongoClient(url);

connect();

async function insert(){
    try {
        await client.connect();
        console.log("hola patron");
        const db = client.db(dbName);
        const col = db.collection("Personajes");

        let suika = {
            "name" : "Chrome",
            "sexo": "hombre"
        }

        const p = await col.insertOne(suika);
        const myDoc = await col.findOne();
    } 
    catch(err){
        console.log(err.stack);
    }
    finally{
        await client.close();
    }
}
insert();