import express from 'express'
const port = 3001
const app = express()

app.get('/',(req,res)=> res.send('Server is ready'))

app.listen(port,()=> console.log(`Server started on http://localhost:${port}`))