const express = require('express');
const router = express.Router();

const courseController = require('../controllers/course-controller');
const appController = require('../controllers/app-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');


router.route('/app').get(adminMiddleware, appController.getAppData);

router.route('/courses').get(authMiddleware, courseController.getAllCourses);
router.route('/courses/:id').get(authMiddleware, courseController.getCourseById);

module.exports = router;