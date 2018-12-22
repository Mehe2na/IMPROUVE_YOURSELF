const mongoose=require('mongoose')

const Schema=mongoose.Schema

export const GroupSchema = new Schema({
	title:{
		type:String,
		required: 'Title is required'
	},
	creator:{
		type:String,
		required: 'creator is required'
	},
	content:{
		type:String,
		required: 'Content is required'
	},
	created_date:{
		type: Date,
		default:Date.now
	}
})