const express=require('express')
const bodyParser=require('body-parser');

const {Port}=require('./config/server.config');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.get('/ping',(req,res)=>{
    return res.json({message:'Problem service is alice'});
}
)
app.listen(Port,()=>{
    console.log(`Server is at ${Port}`);
});