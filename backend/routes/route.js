const express=require('express');
const { getAllTrains, getTrainByNumber } = require('../controller/ticket-controller');

const route=express.Router();

route.get('/',(req,res)=>{
    res.send("Test");
});

route.get('/trains',getAllTrains);
route.get('/searchtrain/:number',getTrainByNumber);

module.exports=route;