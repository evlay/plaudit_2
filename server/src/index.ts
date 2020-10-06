import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`)
})