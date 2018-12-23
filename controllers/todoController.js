import mongoose from 'mongoose'
import {TodoSchema} from '../models/Todo'

export const Todo =mongoose.model("Todo",TodoSchema)

export const addTodo = (req,res)=>{
		res.json({})
	}
export const getTodo = (req,res)=>{
		res.json({})
	}
export const editTodo = (req,res)=>{
		res.json({})
	}
export const deleteTodo = (req,res)=>{
		res.json({/* put code in this section*/})
	}