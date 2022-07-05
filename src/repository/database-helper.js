// const {MongoClient, ServerApiVersion, mongoClient} = require('mongodb');
// const mongoose = require('mongoose')
// const {log} = require("debug");
// const uri = "mongodb+srv://honem223:x4GB0jInCQYEEQcA@cluster0.l6fq83z.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});
//
//
// async function init() {
//     await mongoose.connect(uri);
//     const kittySchema = new mongoose.Schema({
//         name: String
//     });
//
//     kittySchema.methods.speak = function speak() {
//         const greeting = this.name
//             ? "Meow name is " + this.name
//             : "I don't have a name";
//         console.log(greeting);
//     };
//
//     const Kitten = mongoose.model('Kitten', kittySchema);
//     const fluffy = new Kitten({name: 'fluffy'});
//     await fluffy.save();
//     fluffy.speak();
// }
//
// const connect = async () => {
//     await mongoose.connect(uri);
//
// }
//
// const createCollection = (collectName) => {
//     client.connect((err, mongoclient) => {
//         // Get the first db and do an update document on it
//         if (err) throw err;
//         const db = mongoclient.db("test");
//         db.createCollection(collectName, function (err, res) {
//             //Neu co loi thi in ra
//             if (err) throw err;
//             console.log('Tao thanh cong collection');
//             mongoclient.close();
//         });
//     });
// }
//
// const connectCollection = (collectionName, callback) => {
//     callback(client.db("test").collection(collectionName));
// }
// const closeDB = () => {
//     // return client.close();
// }
// module.exports = {connectCollection, closeDB, createCollection}


const uri = "mongodb+srv://honem223:x4GB0jInCQYEEQcA@cluster0.l6fq83z.mongodb.net/?retryWrites=true&w=majority";
let mongoose = require('mongoose');

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(uri)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database()