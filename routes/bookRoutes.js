const express = require('express');
const router = express.Router();
const { validateObjectId } = require('../middleware/validate');
const {
  createBook, getBooks, getBook, updateBook, deleteBook,
  borrowBook, returnBook
} = require('../controllers/bookController');

router.post('/', createBook);
router.get('/', getBooks);
router.get('/:id', validateObjectId, getBook);
router.put('/:id', validateObjectId, updateBook);
router.delete('/:id', validateObjectId, deleteBook);
router.post('/:id/borrow', validateObjectId, borrowBook);
router.post('/:id/return', validateObjectId, returnBook);

module.exports = router;