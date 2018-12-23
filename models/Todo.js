import mongoose from 'mongoose'
const Schema = mongoose.Schema;
export const TodoSchema = new Schema({
	Name: {
		type: String,
		required: 'Title is required'
	},
	Creator: {
		type: String,
		required: 'Author is required'
	},
	todoItem:{
		type:String,
		required: 'todoItem is required'
	},
    created_date:{
		type: Date,
		default:Date.now
	}
    
});
