import express from 'express'
import dotenv from 'dotenv'
const app = express()
const PORT = process.env.PORT || 3000

dotenv.config()

app.get('/', (req, res)=>{
    res.send('Home page')
})

app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`)
})