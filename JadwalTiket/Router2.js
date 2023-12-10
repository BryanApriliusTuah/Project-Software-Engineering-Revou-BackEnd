const express = require('express')
const table = require("./tableDB")
const {Op} = require("sequelize")
const router = express.Router()

router.get('/JadwalTiket2', async (req, res) => {
    const { count, rows } = await table.findAndCountAll({
        where : {
            Dari: {[Op.like] : "%Soekarno%"}
        }
    })
    console.log("If 1")
    res.send(rows)
})