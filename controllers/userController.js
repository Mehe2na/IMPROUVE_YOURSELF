const mongoose=require('mongoose')
import {UserSchema} from '../models/User' 

export const User =mongoose.model("User",UserSchema)

export const getUser = (req,res)=>{
		res.json({})
}
export const addUser = (req,res)=>{
		res.json({})
}
export const editUser = (req,res)=>{
    res.json({})
}
export const deleteUser = (req,res)=>{
    res.json({})
}