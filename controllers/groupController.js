import mongoose from 'mongoose'
import {GroupSchema} from '../models/Group'

export const Group =mongoose.model("Group",GroupSchema)

export const addGroup = (req,res)=>{
		res.json({})
	}
export const getGroup = (req,res)=>{
		res.json({})
	}
export const editGroup = (req,res)=>{
		res.json({})
	}
export const deleteGroup = (req,res)=>{
		res.json({})
	}