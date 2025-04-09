const express = require('express');
const router = express.Router();

const courseController = require('../controllers/course-controller');
const appController = require('../controllers/app-controller');
const authMiddleware = require('../middlewares/auth-middleware');


router.route('/app').get(appController.getAppData);

router.route('/courses').get(authMiddleware, courseController.getAllCourses);
router.route('/courses/:id').get(authMiddleware, courseController.getCourseById);

module.exports = router;