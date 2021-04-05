const mongoose=require('mongoose');
const passport = require('passport');
require('../models/usermodels');
require('../models/imageModel');
require('../config/passportconfig');
var User=mongoose.model('user');
var jwt=require('jsonwebtoken');
const _=require('lodash');
const multer=require('multer');
var Image=mongoose.model('imageUpload');


var storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,__dirname+'/uploads');

  },
  filename:(req,file,cb)=>{
      cb(null,file.originalname);
  }
});

var fileUpload=multer({storage:storage}).single('photo');

module.exports.uploadImage=(req,res)=>{
    fileUpload(req,res,function(err){
        if(err)
        console.log('error in uploading image '+err);
        else
        {
        console.log('file uploaded successfully..');
        const image=Image({
         file:req.file.path
        });
        console.log(req.file.path);

        return image.save().then((docs,)=>{

          res.status(200).json({
            success:true,
            message:'File uploaded successfully...',
            data:docs
          })
        }).catch((err)=>{
            res.status(401).json({
              success:false,
              message:'error in uploading file',
              err:err.message

          })
        })
      }
    })
}

module.exports.fileupload=(req,res)=>{
  res.sendFile(__dirname+'/form.html');
}

module.exports.addNewUser=(req,res)=>{
     var newUser=new User({
         name:req.body.name,
         email:req.body.email,
         contact:req.body.contact,
         password:req.body.password
     });

     return newUser.save().then((docs)=>{
            res.status(200).json({
                message:'New User created..',
                user:docs,
                success:true
            });
     })
     .catch((err)=>{
          res.status(401).json({
              message:'Error in creating new user...',
              error:err.message,
              success:false
          });
     });
};

module.exports.displayAll=(req,res)=>{
   return User.find().select({_id,name,email}).then((docs)=>{
        res.status(200).json({
            success:true,
            message:"list of users",
            data:docs
        })
    }).catch((err)=>{
        res.status(401).json({
            success:false,
            error:err.message
        })
    })
}

module.exports.selectedUser=(req,res)=>{
  return User.findById({_id:req.params.id}).select('_id name email contact').then((docs)=>{
    res.status(200).json({
      success:true,
      messasge:'User Record Found',
      data:docs
    })
  }).catch((err)=>{
    res.status(401).json({
      success:false,
      message:'User not found',
      err:err.message
    })
  })
}

module.exports.updaterecord=(req,res)=>{
    const id=req.params.id;
    const updateData=req.body;

    User.findByIdAndUpdate({_id:id},{$set:updateData}).then((docs)=>{
        return res.status(200).json({
            success:true,
            message:'data updated',
            data:docs
        })
    })
    .catch((err)=>{
        res.status(401).json({
            success:false,
            error:err.message,
            message:'error in updating data'
        });
    });

};

module.exports.authenticate=(req,res,next)=>{
     passport.authenticate('local',(err,user,info)=>{
         if(err)
         return res.status(404).json(err);
         if(user) return res.status(200).json({
             "token":user.generateJWT(),
             data:user
             })

         if(info)
         return res.status(401).json(info);
     })
     (req,res,next);
}

module.exports.userProfile=(req,res)=>{
    User.findOne({_id:req._id}).then((user)=>{
        return res.status(200).json({
            success:true,
            message:"User Found...",
            data:user
        })
    }).catch((err)=>{
        res.status(404).json({
            success:false,
            message:"user not found",
            err:err.message
        })
    })
}

module.exports.deleteuser=(req,res)=>{
  const id=req.params.id;
  User.findByIdAndRemove({_id:id}).then((docs)=>{
    return res.status(200).json({
        success:true,
        message:'data deleted successfully',
        data:docs
    })
})
.catch((err)=>{
    res.status(401).json({
        success:false,
        error:err.message,
        message:'error in deleting data',
    });
});

}


