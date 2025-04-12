import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comment: { type: String, required: true, minlength: 5, maxlength: 1000 },
}, { timestamps: true });

export const Review = mongoose.model('Review', reviewSchema);