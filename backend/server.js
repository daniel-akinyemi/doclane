import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'

dotenv.config()

const port = process.env.PORT || 3002
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)

app.get('/',(req,res)=> res.send('Server is ready'))

app.listen(port,()=> console.log(`Server started on http://localhost:${port}`))