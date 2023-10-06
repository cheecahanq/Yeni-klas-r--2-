'use strict';

const express=require('express');

const app=express();
const PORT=process.env.PORT ?? 8000;


app.all('/', (req,res)=>{
res.send("hosgeldın");

});
app.listen(PORT , ()=>console.log('Running:http://127.0.0.1:'))