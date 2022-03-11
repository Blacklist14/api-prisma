require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./routers/user')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', userRouter)

const PORT = process.env.PORT_SERVER

app.listen(PORT, () => { console.log('Servidor rodando') })
