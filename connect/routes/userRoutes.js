var express=require('express');
var jwthelper=require('../config/jwtHelper');
var useCtrl=require('../controllers/userController');
var appRoutes=express.Router();

appRoutes.get('/display',useCtrl.displayAll);
appRoutes.get('/selecteduser/:id',useCtrl.selectedUser);
appRoutes.put('/updaterecord/:id',useCtrl.updaterecord);
appRoutes.delete('/deleteuser/:id',useCtrl.deleteuser);
appRoutes.post('/newUser',useCtrl.addNewUser);
appRoutes.post('/auth',useCtrl.authenticate);
appRoutes.get('/profile',jwthelper.verifytoken,useCtrl.userProfile);
appRoutes.get('/fileupload',useCtrl.fileupload);
appRoutes.post('/uploads',useCtrl.uploadImage);

module.exports=appRoutes;

