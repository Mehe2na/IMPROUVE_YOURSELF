import express from 'express'
import { getTodo,addTodo,editTodo,deleteTodo } from '../controllers/todoController'

const todoRouter = express.Router()

/* List of routes - examples :

While working, only those ones have to be changed!


todoRouter.get('/todos',getTodo)
todoRouter.post('/todos',addTodo)
todoRouter.delete('/todos',deleteTodo)
todoRouter.put('/todos',editTodo)

*/
export default todoRouter