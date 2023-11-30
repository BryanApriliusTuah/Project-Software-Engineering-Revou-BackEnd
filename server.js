const express = require('express')
const connect = require("./connectDB")
const ContactUsRouter = require("./ContactUs/Router")
const DestiantionRouter = require("./Destination/Router")
const JadwalTiketRouter = require("./JadwalTiket/Router")

const app = express();
app.use(express.json())
const port = 3000;

//Allow Any request from anywhere to get access API Backend
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

//Request and Response
app.use("/",ContactUsRouter)
app.use("/",DestiantionRouter)
app.use("/",JadwalTiketRouter)

//Listen
app.listen(port,() => {
  connect.connect()
  console.log(`Server is running on port ${port}`)
})