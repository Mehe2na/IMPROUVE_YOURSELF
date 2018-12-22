const mongoose=require('mongoose')
import {AdminSchema} from  '../models/Admin'

export const Admin =mongoose.model("Admin",AdminSchema)

export const getAdmin = (req,res)=>{
		res.json({})
}
export const addAdmin = (req,res)=>{
		res.json({})
}
export const editAdmin = (req,res)=>{
    res.json({})
}
export const deleteAdmin = (req,res)=>{
    res.json({})
}