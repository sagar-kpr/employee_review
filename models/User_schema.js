const mongoose = require('mongoose');
const User = new mongoose.Schema({
    employe_name:{
        type: String,
        required: true
    },
    employe_id: {
        type: Number,
        unique: true,
        required: true,
        
    },
    employe_password: {
        type:String,
        required: true
    },
    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AdminSchema'
    },
   assign :[{
        
        type: mongoose.Schema.Types.ObjectId


    }]
},{
    timestamps:true
});


const UserSchema = mongoose.model('UserSchema', User)

module.exports = UserSchema;
