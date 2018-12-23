const mongoose = require('mongoose');
const Schema = mongoose.Schema;
export const UserSchema = new Schema({
	FirstName: {
		type: String,
		required: 'Title is required'
	},
	LastName: {
		type: String,
		required: 'Author is required'
	},
	Email: {
		type: String,
		required: 'Email is required'
	},
	PhoneNumber: {
		type: String,
		default: 'PhoneNumber is required'
    },
    created_date:{
		type: Date,
		default:Date.now
	}
});
