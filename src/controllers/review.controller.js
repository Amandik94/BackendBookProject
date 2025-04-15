import { Review } from '../models/Review.js';

// POST /api/reviews/:bookId — добавить отзыв
const createReview = async (req, res) => {
  const { comment } = req.body;
  const bookId = req.params.bookId;

  try {
    const review = new Review({
      book: bookId,
      user: req.user._id,
      comment,
    });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось создать отзыв' });
  }
};

// GET /api/reviews/:bookId — все отзывы по книге
const getReviewsByBook = async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.bookId })
      .populate('user', 'username')
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось получить отзывы' });
  }
};

// DELETE /api/reviews/:id — удалить отзыв
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Отзыв не найден' });

    if (review.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Недостаточно прав' });
    }

    await review.remove();
    res.json({ message: 'Отзыв удален' });
  } catch (err) {
    res.status(500).json({ message: 'Не удалось удалить отзыв' });
  }
};

export { createReview, getReviewsByBook, deleteReview };