const express = require('express');
const router = express.Router();
//const db = require('../../db');
const { generateToken } = require('../../auth');
const teacherController = require('../controllers/teacherController');

//router.get('/:id', teacherController.getTeacherByIdPassword);

router.get('/:id', teacherController.getTeacherById);
router.get('/', teacherController.getAllTeachers);

router.put('/:id', teacherController.updateTeacher);// put    localhost:3000/api/teachers/4
router.delete('/:id', teacherController.deleteTeacher); //delete    localhost:3000/api/teachers/4
router.post('/', teacherController.createTeacher);  // post    localhost:3000/api/teachers/ 



module.exports = router;
