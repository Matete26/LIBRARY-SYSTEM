const express = require('express');
const { validateObjectId } = require('../middleware/validate');
const router = express.Router();
const { createAuthor, getAuthors, getAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorController');

router.post('/', createAuthor);
router.get('/', getAuthors);
router.get('/:id', validateObjectId, getAuthor);
router.put('/:id', validateObjectId, updateAuthor);
router.delete('/:id', validateObjectId, deleteAuthor);

module.exports = router;