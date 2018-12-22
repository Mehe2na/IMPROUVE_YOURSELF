import express from 'express'
import { getUser,addUser,editUser,deleteUser } from '../controllers/userController'


const userRouter = express.Router()

/* List of routes - examples :

While working, only those ones have to be changed!

userRouter.get('/users',getUser)
userRouter.post('/users',addUser)
userRouter.delete('/users',deleteUser)
userRouter.put('/users',editUser)
*/

export default userRouter