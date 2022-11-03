const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName : {
		type : String,
		required : [true, "First name is required"]
	},
	lastName : {
		type : String,
		required : [true, "Last name is required"]
	},
	email : {
		type : String,
		required : [true, "Email is required"]
	},
	password : {
		type : String,
		required : [true, "Password is required"]
	},
	isAdmin : {
		type : Boolean,
		default : false
	},
	mobileNo : {
		type : String, 
		required : [true, "Mobile No is required"]
	},
	// The "enrollments" property/field will be an array of objects containing the course IDs, the date and time that the user enrolled to the course and the status that indicates if the user is currently enrolled to a course
	enrollments : [
		{
			courseId : {
				type : String,
				required : [true, "Course ID is required"]
			},
			enrolledOn : {
				type : Date,
				default : new Date()
			},
			status : {
				type : String,
				default : "Enrolled"
			}
		}
	]
})

module.exports = mongoose.model("User", userSchema);

