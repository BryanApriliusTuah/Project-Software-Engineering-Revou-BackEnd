const express = require('express')
const table = require("./tableDB")
const router = express.Router()

router.post('/ContactUs',async (req, res) => {
    const data = await table.create({
        Name : req.body.Name,
        Email : req.body.Email,
        Message : req.body.Message
      })

    res.send(data)
})

module.exports = router