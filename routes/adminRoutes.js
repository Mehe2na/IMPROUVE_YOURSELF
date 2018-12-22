import express from 'express'
import { getAdmin,addAdmin,editAdmin,deleteAdmin } from '../controllers/adminController'

const adminRouter = express.Router()
/* List of routes - examples :

While working, only those ones have to be changed!

adminRouter.get('/admins',getAdmin)
adminRouter.post('/admins',addAdmin)
adminRouter.delete('/admins',deleteAdmin)
adminRouter.put('/admins',editAdmin)
*/

export default adminRouter 