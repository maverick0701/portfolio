const express=require('express');
const router=express.Router();
const home_controller=require('../controller/home_controller');

router.get('/',home_controller.home)

router.get('/mystory',home_controller.mystory);
router.get('/contact',home_controller.contact);
router.get('/get',home_controller.give);
router.get('/education',home_controller.fifth);
router.post('/touch',home_controller.touch);
module.exports=router;