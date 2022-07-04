const {MongoClient, ServerApiVersion, mongoClient} = require('mongodb');
const uri = "mongodb+srv://honem223:x4GB0jInCQYEEQcA@cluster0.l6fq83z.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

const createCollection = (collectName) => {
    client.connect((err, mongoclient) => {
        // Get the first db and do an update document on it
        if (err) throw err;
        const db = mongoclient.db("test");
        db.createCollection(collectName, function (err, res) {
            //Neu co loi thi in ra
            if (err) throw err;
            console.log('Tao thanh cong collection');
            mongoclient.close();
        });
    });
}

const connectCollection = (collectionName, callback) => {
    callback(client.db("test").collection(collectionName));
}
const closeDB = () => {
    // return client.close();
}
module.exports = {connectCollection, closeDB, createCollection}
