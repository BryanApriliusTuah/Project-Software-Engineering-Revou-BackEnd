const express = require('express')
const table = require("./tableDB")
const router = express.Router()

router.get('/JadwalTiket', async (req, res) => {
    const { count, rows } = await table.findAndCountAll({
        where : {
            Dari : req.query.Dari
        }
    })
    console.log(count)
    res.send(rows)
    })

module.exports = router