const express=require('express');
const { getAllTrains, getTrainByNumber } = require('../controller/ticket-controller');

const route=express.Router();

route.get('/trains/:type',getAllTrains);
route.get('/searchtrain/:number',getTrainByNumber);

module.exports=route;