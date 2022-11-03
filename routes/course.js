const express = require("express");
const router = express.Router();
const Course = require("../models/Course.js");
const courseController = require("../controllers/courseController.js");
const auth = require("../auth.js");

// Create single course
router.post("/create", auth.verify, (req, res) => {

	const data = {
		course: req.body,
		isAdmin: auth.decode(req.headers.authorization).isAdmin
	}

	courseController.addCourse(data).then(resultFromController => {
		res.send(resultFromController)
	})
})

// Get all courses
router.get("/all", (req, res) => {
	courseController.getAllCourses().then(resultFromController => {
		res.send(resultFromController)
	})
})

// Get all ACTIVE courses
router.get("/active", (req, res) => {
	courseController.getActiveCourses().then(resultFromController => {
		res.send(resultFromController)
	})
})

// get single course
router.get("/:courseId", (req, res) => {
	courseController.getCourse(req.params.courseId).then(resultFromController => {
		res.send(resultFromController)
	})
})

// updating a single course
router.patch("/:courseId/update", auth.verify, (req, res) => {
	courseController.updateCourse(req.params.courseId, req.body).then(resultFromController => {
		res.send(resultFromController)
	})
})

// archiving a single course
router.patch("/:courseId/archive", auth.verify, (req, res) => {
	courseController.archiveCourse(req.params.courseId).then(resultFromController => {
		res.send(resultFromController)
	})
})

module.exports = router;