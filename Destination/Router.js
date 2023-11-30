const express = require('express')
const table = require("./tableDB")
const router = express.Router()

router.get('/Destination',async (req, res) => {
    const data = await table.findAll()
    res.send(data)
})

module.exports = router