const express = require('express');
const api = express();


api.get('/',(req,res,next)=>{
    res.status(200).send({
        mensagem: "funcionou"
    })
})

api.post('/',(req,res,next)=>{
    res.status(200).send({
        mensagem:" joao funcionou"
    })
})

module.exports = api;