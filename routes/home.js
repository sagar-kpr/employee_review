const express = require('express');
const router = express.Router();

const homeController = require('../controller/home_controller');

router.get('/', homeController.home)
router.get('/destroy/:id', homeController.remove);
router.get('/profile/:id', homeController.profile);
router.get('/assign/', homeController.assign)
router.post('/employedetails', homeController.employe);


module.exports = router;