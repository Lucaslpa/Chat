import './database/connection'
import { Message } from './database/entity/message.entity'
import {Router , Request , Response} from 'express'
import express from 'express'
import "reflect-metadata";
import { getRepository } from 'typeorm'
import socket, {Namespace } from 'socket.io'
import http, { IncomingMessage, Server } from 'http'
import cors from 'cors'

const app = express()
 const server = http.createServer(app)
 const io = socket(server)

const routes = Router()

io.on('connection' , socket => { 
       console.log('[SOCKET] connected')
})



routes.post('/messages' , async (req, res ) => { 
       const {user, message} = req.body
       const response = await getRepository(Message).insert({user, message})
       console.log('Messagesended')
       res.status(200).send()
})

routes.get('/messages' ,async (req, res ) => { 
    
    const response = await getRepository(Message).find()
     
    res.status(200).json(response)  }) 

export default routes