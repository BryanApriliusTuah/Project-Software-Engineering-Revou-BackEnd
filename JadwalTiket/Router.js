const express = require('express')
const table = require("./tableDB")
const router = express.Router()

router.get('/JadwalTiket', async (req, res) => {
    if(
        (req.query.Dari === "") && (req.query.Ke === "") && (req.query.Waktu_Berangkat === "")
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Jenis_Pesawat : req.query.Jenis_Pesawat,
                Kelas : req.query.Kelas
            }
        })
        console.log("If 1")
        res.send(rows)
    }
    
    else if(
        (req.query.Ke === "") && (req.query.Waktu_Berangkat === "")
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Dari : req.query.Dari,
                Jenis_Pesawat : req.query.Jenis_Pesawat,
                Kelas : req.query.Kelas
            }
        })
        console.log("If 2")
        res.send(rows)
    }else if(
        (req.query.Dari === "") && (req.query.Waktu_Berangkat === "")
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Ke : req.query.Ke,
                Jenis_Pesawat : req.query.Jenis_Pesawat,
                Kelas : req.query.Kelas
            }
        })
        console.log("If 3")
        res.send(rows)
    }
    
    else if(
        (req.query.Dari === "") && (req.query.Ke === "")
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Jenis_Pesawat : req.query.Jenis_Pesawat,
                Waktu_Berangkat : req.query.Waktu_Berangkat,
                Kelas : req.query.Kelas
            }
        })
        console.log("If 4")
        res.send(rows)
    }
    else if(
        req.query.Ke === ""
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Dari : req.query.Dari,
                Jenis_Pesawat : req.query.Jenis_Pesawat,
                Waktu_Berangkat : req.query.Waktu_Berangkat,
                Kelas : req.query.Kelas
            }
        })
        console.log("If 5")
        res.send(rows)
    } else if(
        req.query.Waktu_Berangkat === ""
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Dari : req.query.Dari,
                Ke : req.query.Ke,
                Jenis_Pesawat : req.query.Jenis_Pesawat,
                Kelas : req.query.Kelas
            }
        })
        console.log("If 6")
        res.send(rows)
    } else if(
        req.query.Dari === ""
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Ke : req.query.Ke,
                Jenis_Pesawat : req.query.Jenis_Pesawat,
                Waktu_Berangkat : req.query.Waktu_Berangkat,
                Kelas : req.query.Kelas
            }
        })
        console.log("IF 7")
        res.send(rows)
    }

})

module.exports = router