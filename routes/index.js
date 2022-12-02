const express = require('express');
const router = express.Router();
const loginController = require('../controller/login_controller')
const AdminRegisterController = require('../controller/admin_register_form_controller');
const homeController = require('../controller/home_controller');

router.get('/', loginController.login );
router.get('/Admin_Register',loginController.register );
router.get('/destroy', homeController.destroy )

router.post('/session', homeController.session);
router.post('/adminRegisterForm', AdminRegisterController.RegisterForm );

router.use('/Admin_home', require('./home'))
router.use('/Employe_home', require('./home'))
module.exports = router;