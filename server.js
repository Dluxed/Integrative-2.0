const mongoose  = require('mongoose');
const {MongoClient} = require("mongodb");

require('dotenv').config()
const url = process.env.URI_MONGO 
const client = new MongoClient(url);
const dbName = "DrStone";

async function connect(){
    try {
        await mongoose.connect(url)
        console.log("Ahueso tenemos coneccion (☞ﾟヮﾟ)☞")
    } catch (error) {
        console.log("Valio we ");
        console.log(error);
        
    }
}



connect();

async function insert(){
    try {
        await client.connect();
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
//insert();

async function select(){
    await client.connect();   
    const db = client.db(dbName);
    const col = db.collection("Personajes");
    const myDoc = await col.findOne();
    
    console.log(myDoc);
}

select();