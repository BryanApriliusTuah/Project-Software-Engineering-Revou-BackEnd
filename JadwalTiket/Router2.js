const express = require('express')
const table = require("./tableDB")
const {Op} = require("sequelize")
const router = express.Router()

router.get('/JadwalTiket2', async (req, res) => {
    const Dari = req.query.Dari
    const { count, rows } = await table.findAndCountAll({
        where : {
            Dari: {[Op.like] : `%${Dari}%`}
        }
    })
    console.log("If 1")
    res.send(rows)
})

module.exports = router