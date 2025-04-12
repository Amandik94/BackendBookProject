import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    authors: { type: String },
    publisher: { type: String },
    pages: { type: Number },
    year: { type: Number },
    desc: { type: String, maxlength: 500 },
    isbn13: { type: String, unique: true },
    price: { type: String },
    image: { type: String },
    url: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // пользователь, добавивший книгу
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
