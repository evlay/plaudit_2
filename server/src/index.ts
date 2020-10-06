import express from "express"
import dotenv from "dotenv"

const env = dotenv.config()
const PORT = process.env.PORT || 3000

// app 
const app = express()

// middleware
app.use(express.json())

// Routes

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`)
})