import mongoose from 'mongoose'
import {MessageSchema} from '../models/Message'

export const Message =mongoose.model("Message",MessageSchema)

export const addMessage = (req,res)=>{
		res.json({})
	}
export const getMessage = (req,res)=>{
		res.json({})
	}

export const deleteMessage = (req,res)=>{
		res.json({/* put code in this section*/})
	}