import express from 'express'
import { getMessage,addMessage,editMessage,deleteMessage } from '../controllers/messageController'

const messageRouter = express.Router()

/* List of routes - examples :

While working, only those ones have to be changed!


messageRouter.get('/messages',getMessage)
messageRouter.post('/messages',addMessage)
messageRouter.delete('/messages',deleteMessage)
messageRouter.put('/messages',editMessage)

*/
export default messageRouter