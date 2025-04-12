import { body } from "express-validator";
import { createCustomValidatorMiddleware } from "../validators/general.validator.js";

const book = body("book")
  .notEmpty()
  .withMessage("Требуется указать книгу")
  .isMongoId()
  .withMessage("Неверный формат ID книги");

const user = body("user")
  .notEmpty()
  .withMessage("Требуется указать пользователя")
  .isMongoId()
  .withMessage("Неверный формат ID пользователя");

const comment = body("comment")
  .notEmpty()
  .withMessage("Требуется указать текст отзыва")
  .isLength({ min: 2 })
  .withMessage("Текст отзыва должен содержать не менее 2 символов");

export const createReviewValidator = createCustomValidatorMiddleware([
  book,
  user,
  comment,
]);
