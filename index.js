import express from 'express'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


mongoose.Promise=global.Promise;

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>
    {console.log("DB is connected");}    
).catch((err)=>{
    console.log(err);
    process.exit();
})

const Port=process.env.PORT||3000;

app.listen(Port,(err)=>{
    if(err) console.log(err);
    else console.log(`port is live at ${Port}`);
});