const Admin = require('../models/Admin_schema');
const Employe = require('../models/User_schema');


//https://github.com/rks1995/employee-review-system

module.exports.session = async function(req,res){
   let user = await Admin.findOne({admin_id: req.body.employe_id})
   if(user){
        if(user.admin_password == req.body.employe_password){
            res.cookie('user', user.id)
            return res.redirect('/Admin_home')
        }
        else{
            return res.redirect('back')
        }
   }else{
        let user = await Employe.findOne({employe_id: req.body.employe_id}) 
        if(user){
            if(user.employe_password == req.body.employe_password){
                res.cookie('user', user.id)
                return res.redirect('/Employe_home')
            }
        }
        else{
            return res.redirect('back')
        }
   }
}    

module.exports.home = async function(req,res){
    if(req.cookies.user){
        let user = await Admin.findById(req.cookies.user)
        if(user){
            let employe = await Employe.find({})
            return res.render('Admin_home',{
                admin: user,
                employe : employe
            })
        }else{
            user = await Employe.findById(req.cookies.user)
            if(user){
                let admin = await Admin.find({})
                return res.render('Employe_home', {
                    employe: user,
                    admin: admin
                })
            }    
        }
    }else{
        return res.redirect('/')
    }
    
}


module.exports.destroy = function(req,res){
    res.clearCookie('user');
    return res.redirect('/')
}

module.exports.employe = async function(req,res){
    let user = await Admin.findOne({admin_id: req.body.employe_id})
    if(user){
        return res.redirect('back')
    }else{
        user = await Employe.findOne({employe_id: req.body.employe_id})
        if(!user){
            console.log('not in employe',user)
            console.log( req.body.employe_id)
            let newemploye = await Employe.create({
                employe_name : req.body.employe_name,
                employe_id : req.body.employe_id,
                employe_password : req.body.employe_password,
                admin: req.cookies.user
                
            })
            console.log('employe ceated',newemploye)
            let admin = await Admin.findById(req.cookies.user)
            admin.employes.push(newemploye)
            admin.save();
            console.log('admin',admin)
            console.log('employe',newemploye)
            return res.redirect('back')
            
        }else{
            console.log('already in database')
            return res.redirect('back')
        }
    }
}    

module.exports.profile = async function(req,res){
    let user = await Employe.findById(req.params.id)
    let admin = await Admin.findById(req.cookies.user);
    let employe = await Employe.find({})
    return res.render('profile', {
        user:user,
        admin: admin,
        employe: employe
    })
}


module.exports.remove = async function(req,res){
    let admin = await Admin.findById(req.cookies.user);
     
    admin.employes= admin.employes.filter(check)
    
    function check(person){
        if(String(person) != String(req.params.id)){
            return person
        }
    }
    await Employe.findByIdAndDelete(req.params.id)
    admin.save();
    return res.redirect('back')
   

}


module.exports.assign = async function(req,res){
    //let assignemploye = await Employe.findById(req.params.id);
    
    console.log(req.query.id)
}