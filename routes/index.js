var express = require('express');
var router = express.Router();
const DBHelper = require("../src/repository/database-helper")
const {ObjectID, ObjectId} = require("mongodb");
/* GET home page. */
router.get('/', function (req, res, next) {
    throw new Error("Looix")
    DBHelper.connectCollection("products", db => {
            db.find({_id: ObjectId("62c2a04424751cc963aaee6b")}).toArray((error, result) => {
                res.json(result)
            })
    })
});

module.exports = router;
