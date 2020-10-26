import express from "express"
import dotenv from "dotenv"
import {getConnectionManager, ConnectionManager, Connection} from "typeorm"
import "reflect-metadata"

const env = dotenv.config()
const PORT = process.env.PORT || 3000

const connectionManager = getConnectionManager()

const connection = connectionManager.create({
    type: 'postgres',
    host: process.env.PG_HOST,
    port: 5432,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASS,
    database: 'plaudit_db'
})

// app 
const app = express()

// middleware
app.use(express.json())

// Routes

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/test', async (req, res) => {
   await connection.connect()
    .then(connection => console.log('Connected to DB'))
    .catch(err => console.error(err))
    return
})

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`)
})