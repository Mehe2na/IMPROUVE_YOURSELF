import mongoose from 'mongoose'
import {ChallengeSchema} from '../models/Challenge'

export const Challenge =mongoose.model("Challenge",ChallengeSchema)

export const addChallenge = (req,res)=>{
		res.json({})
	}
export const getChallenge = (req,res)=>{
		res.json({})
	}
export const editChallenge = (req,res)=>{
		res.json({})
	}
export const deleteChallenge = (req,res)=>{
		res.json({/* put code in this section*/})
	}