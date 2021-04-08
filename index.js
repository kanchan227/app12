require('./connect/config/db');
var express=require('express');
//var bodyparser=require('body-parser');
var api=require('./connect/routes/userRoutes');
var cors=require('cors');

var app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/',api);
app.use(express.static(__dirname+'/dist/webapp/index.html'));

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin' ,'*'),
  res.setHeader('Access-Control-Allow-Credential',true),
  res.setHeader('Access-Control-Alow-Methods','GET,POST,PUT,DELETE,OPTIONS'),
  res.setHeader('Access-Control-Allow-Headers', 'Origin,Content-Type,Accept')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});
