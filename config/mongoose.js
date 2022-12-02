const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/ReviewDb")

const db = mongoose.connection;

db.on('error', console.error.bind(console, "err while connecting db"));

db.once('open',function(){
    console.log('ReviewDb connected to database')
})

