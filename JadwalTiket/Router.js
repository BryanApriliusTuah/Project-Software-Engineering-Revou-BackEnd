const express = require('express')
const table = require("./tableDB")
const {Op} = require("sequelize")
const router = express.Router()

router.get('/JadwalTiket', async (req, res) => {
    const Dari = req.query.Dari
    const Ke = req.query.Ke
    const Jam = req.query.Waktu_Berangkat
    const pesawat = req.query.Jenis_Pesawat
    const kelas = req.query.Kelas

    if(
        (Dari === "") && (Ke === "") && (Jam === "")
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Jenis_Pesawat : pesawat,
                Kelas : kelas
            }
        })
        console.log("If 1")
        res.send(rows)
    }
    
    else if(
        (req.query.Ke === "") && (Jam === "")
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Dari : {[Op.like] : `%${Dari}%`},
                Jenis_Pesawat : pesawat,
                Kelas : kelas
            }
        })
        console.log("If 2")
        res.send(rows)
    }else if(
        (Dari === "") && (Jam === "")
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Ke : {[Op.like] : `%${Ke}%`},
                Jenis_Pesawat : pesawat,
                Kelas : kelas
            }
        })
        console.log("If 3")
        res.send(rows)
    }
    
    else if(
        (Dari === "") && (Ke === "")
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Jenis_Pesawat : pesawat,
                Waktu_Berangkat : Jam,
                Kelas : kelas
            }
        })
        console.log("If 4")
        res.send(rows)
    }
    else if(
        Ke === ""
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Dari : {[Op.like] : `%${Dari}%`},
                Jenis_Pesawat : pesawat,
                Waktu_Berangkat : Jam,
                Kelas : kelas
            }
        })
        console.log("If 5")
        res.send(rows)
    } else if(
        Jam === ""
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Dari : {[Op.like] : `%${Dari}%`},
                Ke : {[Op.like] : `%${Ke}%`},
                Jenis_Pesawat : pesawat,
                Kelas : kelas
            }
        })
        console.log("If 6")
        res.send(rows)
    } else if(
        Dari === ""
    ){
        const { count, rows } = await table.findAndCountAll({
            where : {
                Ke : {[Op.like] : `%${Ke}%`},
                Jenis_Pesawat : pesawat,
                Waktu_Berangkat : Jam,
                Kelas : kelas
            }
        })
        console.log("IF 7")
        res.send(rows)
    }else{
        const { count, rows } = await table.findAndCountAll({
            where : {
                Dari : {[Op.like] : `%${Dari}%`},
                Ke : {[Op.like] : `%${Ke}%`},
                Waktu_Berangkat : Jam,
                Jenis_Pesawat : pesawat,
                Kelas : kelas
            }
        })
        console.log("Else")
        res.send(rows)
    }

})

module.exports = router