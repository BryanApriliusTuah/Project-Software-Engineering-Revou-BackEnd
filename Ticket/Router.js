const express = require('express')
const table = require("./tableDB")
const router = express.Router()

router.post('/Ticket',async (req, res) => {
    const data = await table.create({
        gambar : req.body.gambar,
        nama : req.body.nama,
        dari : req.body.dari,
        ke : req.body.ke,
        waktu : req.body.waktu,
        harga : req.body.harga,
        kelas : req.body.kelas
      })

    res.send(data)
})

router.get('/Ticket', async(req, res) => {
    const data = await table.findAll()
    res.send(data)
})

module.exports = router