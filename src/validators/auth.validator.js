import { body } from "express-validator";
import { createCustomValidatorMiddleware } from "../validators/general.validator.js";

const name = body("name")
  .notEmpty()
  .withMessage("Требуется указать имя")
  .isLength({ min: 2 })
  .withMessage("Имя должно содержать не менее 2 символов");

const email = body("email")
  .notEmpty()
  .withMessage("Требуется электронная почта")
  .isEmail()
  .withMessage("Адрес электронной почты недействителен");

const password = body("password")
  .notEmpty()
  .withMessage("Требуется ввести пароль")
  .isLength({ min: 8 })
  .withMessage("Пароль должен содержать не менее 8 символов")
  .matches(/\d/)
  .withMessage("Пароль должен содержать хотя бы одну цифру")
  .matches(/[A-Za-z]/)
  .withMessage("Пароль должен содержать хотя бы одну букву");

export const registerValidator = createCustomValidatorMiddleware([
  name,
  email,
  password,
]);

export const loginValidator = createCustomValidatorMiddleware([
  email,
  password,
]);