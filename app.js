const express = require('express');
const app = express();
const RotaProdutos = require('./routes/produtos');
const Api = require('./routes/ids')
const RotaPedidos = require('./routes/pedidos')
const morgan = require('morgan')

app.use(morgan("dev"))
app.use('/produtos',RotaProdutos);
app.use('/consumir',Api);
app.use('/pedidos',RotaPedidos)

app.use((req,res,next)=>{
    const erro = new erro("não Foi Encontrado nenhuma pagina")
    erro.status(404)
    next(erro)  
})

app.use((error,res,req,next)=>{
    res.status(error.status|| 500)
    return res.send({
        erro: {
            mensagem: "um erro foi encontrado" + error.message
        }
    })
})
module.exports = app;

