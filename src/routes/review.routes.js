import express from 'express';
import {
  createReview,
  getReviewsByBook,
  deleteReview,
} from '../controllers/review.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { createReviewValidator }  from '../validators/review.validator.js';

const router = express.Router();

router.get('/:bookId', protect, getReviewsByBook);
router.post('/:bookId', protect, createReviewValidator, createReview);
router.delete('/:id', protect, deleteReview);

export default router;
