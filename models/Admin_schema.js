const mongoose = require('mongoose');
const Admin = new mongoose.Schema({
    admin_name:{
        type: String,
        required: true
    },
    admin_id: {
        type: Number,
        required: true,
        unique: true
    },
    admin_password: {
        type:String,
        required: true
    },
    employes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'UserSchema'
    }]
},{
    timestamps:true
});


const AdminSchema = mongoose.model('AdminSchema', Admin)

module.exports = AdminSchema;

