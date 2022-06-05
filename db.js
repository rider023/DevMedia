const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://shiv187:shivang187@cluster0.e0jwu.mongodb.net/devmedia',()=>{
    console.log("Connection Successful");
});