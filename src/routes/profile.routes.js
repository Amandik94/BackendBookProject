import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  getMyProfile,
  upsertMyProfile,
  addFavoriteBook,
  removeFavoriteBook,
  getFavoriteBooks,
} from "../controllers/profile.controller.js";
import { createProfileValidator } from "../validators/profile.validator.js";

const router = express.Router();

router.get("/me", protect, getMyProfile);
router.post("/me", protect, createProfileValidator, upsertMyProfile);
router.post("/me/favorites/:bookId", protect, addFavoriteBook); // Добавить книгу в избранное
router.delete("/me/favorites/:bookId", protect, removeFavoriteBook); // Удалить книгу из избранного
router.get("/me/favorites", protect, getFavoriteBooks); // Получить избранные книги

export default router;
