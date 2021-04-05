const mongoose=require('mongoose');
var imageSchema=mongoose.Schema({
  file:{
      type:String
  },
  date:{
    type:Date,
    default:Date.now
  }
});

mongoose.model('imageUpload',imageSchema);
