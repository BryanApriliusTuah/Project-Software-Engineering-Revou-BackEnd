const express = require('express')
const table = require("./tableDB")
const table2 = require("./tableDB2")
const router = express.Router()

router.get('/Destination',async (req, res) => {
    const { count, rows } = await table.findAndCountAll({
        where : {
            kota : req.query.kota
        }
    })
    res.send(rows)
})

router.get('/DestinationHarga',async (req, res) => {
    const { count, rows } = await table.findAndCountAll({
        where : {
            Destinasi : req.query.Destinasi
        }
    })
    res.send(rows)
})

router.post("/Destination",async (req, res) => {
    const data = await table2.create({
        nama : req.body.nama,
        rating : req.body.rating,
        gambar : req.body.gambar,
        checkin : req.body.checkin,
        checkout : req.body.checkout,
        room : req.body.room,
        pay : req.body.pay
      })

    res.send(data)
})

router.get("/DestinationData", async (req, res) => {
    const data = await table2.findAll()
    res.send(data)
})

module.exports = router