import express from 'express'
import "reflect-metadata";
import Routes from './routes'
import cors from 'cors'
import http from 'http'
import socket from 'socket.io'

export const app = express()

app.use(express.json())
app.use(cors({credentials:true, origin:'http://localhost:3000'} ))

const server = http.createServer(app)
 const io = socket(server)

app.use(Routes)

io.on('connection' , socket => { 
     console.log('[SOCKET] connected')
      socket.on('send.message', () => {
         
          io.emit('send.message')
     })
})


app.get('/' , (req, res ) => { 
         
    res.status(200).send('hello world')
 })

server.listen(1000 , () => { 
     console.log('servidor rodando')
}) 

export default app 
