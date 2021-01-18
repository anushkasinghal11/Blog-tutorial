import express from 'express'
const app=express();
const Port=3000;
app.listen(Port,(err)=>{
    if(err) console.log(err);
    else console.log(`port is live at ${Port}`);
});