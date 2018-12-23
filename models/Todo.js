import mongoose from 'mongoose'
const Schema = mongoose.Schema;
export const ChallengeSchema = new Schema({
	Name: {
		type: String,
		required: 'Title is required'
	},
	Creator: {
		type: String,
		required: 'Author is required'
	},
    created_date:{
		type: Date,
		default:Date.now
	}
    
});
