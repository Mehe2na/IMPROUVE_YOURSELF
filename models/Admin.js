import mongoose from 'mongoose'
const Schema = mongoose.Schema;
export const AdminSchema = new Schema({
	FirstName: {
		type: String,
		required: 'FirstName is required'
	},
	LastName: {
		type: String,
		required: 'LastName is required'
	},
	Email: {
		type: String,
		required: 'Email  is required'
	},
	PhoneNumber: {
		type: String,
		required: 'PhoneNumber is required'
    },
    created_date:{
		type: Date,
		default:Date.now
	}
    
});
