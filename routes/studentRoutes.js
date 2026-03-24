const express = require('express');
const { validateObjectId } = require('../middleware/validate');
const router = express.Router();
const { createStudent, getStudents, getStudent, updateStudent, deleteStudent } = require('../controllers/studentController');

router.post('/', createStudent);
router.get('/', getStudents);
router.get('/:id', validateObjectId, getStudent);
router.put('/:id', validateObjectId, updateStudent);
router.delete('/:id', validateObjectId, deleteStudent);

module.exports = router;
