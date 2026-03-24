const express = require('express');
const { validateObjectId } = require('../middleware/validate');
const router = express.Router();
const { createAttendant, getAttendants, getAttendant, updateAttendant, deleteAttendant } = require('../controllers/attendantController');

router.post('/', createAttendant);
router.get('/', getAttendants);
router.get('/:id', validateObjectId, getAttendant);
router.put('/:id', validateObjectId, updateAttendant);
router.delete('/:id', validateObjectId, deleteAttendant);

module.exports = router;