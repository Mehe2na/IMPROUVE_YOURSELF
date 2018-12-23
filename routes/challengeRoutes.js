import express from 'express'
import { getChallenge,addChallenge,editChallenge,deleteChallenge } from '../controllers/challengeController'

const challengeRouter = express.Router()

/* List of routes - examples :

While working, only those ones have to be changed!


challengeRouter.get('/challenges',getChallenge)
challengeRouter.post('/challenges',addChallenge)
challengeRouter.delete('/challenges',deleteChallenge)
challengeRouter.put('/challenges',editChallenge)

*/
export default challengeRouter