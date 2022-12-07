const Admin = require('../models/Admin_schema');
const Employe = require('../models/User_schema');

module.exports.login = async function(req,res){
    console.log('login controler')
    if(req.cookies.user){
        let user = await Admin.findById(req.cookies.user)
        if(user){
            return res.redirect('/Admin_home')
        }else{
            user = await Employe.findById(req.cookies.user)
            if(user){
                return res.redirect('/Employe_home')
            }    
        }
    }else{
        return res.render('login')
    }
   
}

module.exports.register = async function(req,res){
    console.log('register controler')
    if(req.cookies.user){
        let user = await Admin.findById(req.cookies.user)
        if(user){
            return res.redirect('/Admin_home')
        }else{
            user = await Employe.findById(req.cookies.user)
            if(user){
                return res.redirect('/Employe_home')
            }    
        }
    }else{
        return res.render('Admin_Register')
    }
}