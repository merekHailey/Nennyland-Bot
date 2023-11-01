const mongoose = require('mongoose');
const { dbhost, dbAuthName, dbAuthMech } = require("./config")
 require("dotenv").config()

 
 
function connect() {
    return mongoose.connect(
        `mongodb://${process.env.ENCODED_USER}:${process.env.ENCODED_PASS}@${dbhost}/${dbAuthName}?authMechanism=${dbAuthMech}`
        );
}

function connectDB(){
    mongoose.set('strictQuery', true);
    return mongoose.connect()
}

module.exports = { connectDB, connect };