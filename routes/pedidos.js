const express = require('express')
const router = express.Router()

router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Retorna Os Pedidos"
    })
})
router.post("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Adiciona Um pedido"
    })
})


router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    if (id === "especial") {
        res.send({
            mensagem: "Você Descobriu o id especial"
        })
    }
    else{
            res.status(200).send({
                mensagem: "ID Do Pedido",
                id: id
            })
            }

        })
module.exports = router;