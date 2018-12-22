import express from 'express'
import { getGroup,addGroup,editGroup,deleteGroup } from '../controllers/groupController'

const groupRouter = express.Router()

/* List of routes - examples :

While working, only those ones have to be changed!


groupRouter.get('/groups',getGroup)
groupRouter.post('/groups',addGroup)
groupRouter.delete('/groups',deleteGroup)
groupRouter.put('/groups',editGroup)

*/
export default groupRouter