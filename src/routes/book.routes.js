import express from "express";
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { createBookValidator } from "../validators/book.validator.js";

const router = express.Router();

router.post("/", createBookValidator, protect, createBook);
router.get("/", getBooks);
router.get("/:id", getBookById);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

export default router;
