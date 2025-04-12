import { body } from "express-validator";
import { createCustomValidatorMiddleware } from "../validators/general.validator.js";

const name = body("name")
  .notEmpty()
  .withMessage("Требуется указать имя")
  .isLength({ min: 2 })
  .withMessage("Имя должно содержать не менее 2 символов");

const avatar = body("avatar")
  .optional()
  .isURL()
  .withMessage("Требуется указать корректный URL на изображение");

const bio = body("bio")
  .optional()
  .isLength({ max: 500 })
  .withMessage("Биография не должна превышать 500 символов");

export const createProfileValidator = createCustomValidatorMiddleware([
  name,
  avatar,
  bio,
]);
