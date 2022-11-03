const Course = require("../models/Course.js")
const auth = require("../auth.js");

module.exports.addCourse = (data) => {
	if(data.isAdmin == true){
		let newCourse = new Course({
			name: data.course.name,
			description: data.course.description,
			price: data.course.price
		})

		return newCourse.save().then((newCourse, error) => {
			if(error){
				return false
			}
			return true
		})
	}

	// If the user is not admin, then return this message as a promise to avoid errors
	let message = Promise.resolve('User must be ADMIN to access this.')

	return message.then((value) => {
		return value
	})
}

module.exports.getAllCourses = () => {
	return Course.find({}).then(result => {
		return result
	})
}

module.exports.getActiveCourses = () => {
	return Course.find({isActive: true}).then(result => {
		return result
	})
}

module.exports.getCourse = (courseId) => {
	return Course.findById(courseId).then(result => {
		return result
	})
}

module.exports.updateCourse = (courseId, newData) => {
	return Course.findByIdAndUpdate(courseId, {
		name: newData.name,
		description: newData.description,
		price: newData.price
	})
	.then((updatedCourse, error) => {
		if(error){
			return false
		}
		return true
	})
}

module.exports.archiveCourse = (courseId) => {
	return Course.findByIdAndUpdate(courseId, {
		isActive: false
	})
	.then((archivedCourse, error) => {
		if(error){
			return false
		}
		return true
	})
}