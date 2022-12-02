const Admin = require('../models/Admin_schema');
const Employe = require('../models/User_schema');

module.exports.RegisterForm = async function(req,res){
    let user = await Employe.findOne({employe_id: req.body.admin_id})
    if(user){
        console.log('this id already taken by employe')
        return res.redirect('back');
    }else{
        user = await Admin.findOne({admin_id: req.body.admin_id})
        if(!user){
            if(req.body.admin_password == req.body.confirm_password){
                await Admin.create(req.body, async function(err,admin){
                    if(err){ console.log('err in finding in admin'); return }
                    console.log('created::',admin)
                    return res.redirect('/')
                })
            }else{
                console.log('invalid id/password ')
                return res.redirect('back');
            }
            
        }else{
            console.log('this id exits in admin ')
            return res.redirect('back');
        }
    }
    
}