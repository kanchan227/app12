const  mongoose=require('mongoose');
mongoose.connect('mongodb+srv://mydb:mydb123@cluster0.qvm9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{urlNewParser:true}).then(()=>{
console.log('database connected');
}).catch((err)=>{
    console.log("error in connecting database"+err);
})
