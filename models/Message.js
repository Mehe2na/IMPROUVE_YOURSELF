import mongoose from 'mongoose'
const Schema = mongoose.Schema;
export const MessageSchema = new Schema({
	Sender: {
		type: String,
		required: 'Title is required'
	},
	Receiver: {
		type: String,
		required: 'Author is required'
	},
	Content: {
		type: String,
		required: 'Content is required'
	},
    created_date:{
		type: Date,
		default:Date.now
	}
    
});
