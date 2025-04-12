import { body } from "express-validator";
import { createCustomValidatorMiddleware } from "../validators/general.validator.js";

const title = body("title")
  .notEmpty()
  .withMessage("Требуется указать название книги")
  .isLength({ min: 2 })
  .withMessage("Название книги должно содержать не менее 2 символов");

const authors = body("authors")
  .notEmpty()
  .withMessage("Требуется указать авторов книги")
  .isLength({ min: 2 })
  .withMessage("Авторы книги должны содержать не менее 2 символов");

const publisher = body("publisher")
  .optional()
  .isLength({ min: 2 })
  .withMessage("Издатель книги должен содержать не менее 2 символов");

const pages = body("pages")
  .optional()
  .isNumeric()
  .withMessage("Количество страниц должно быть числом")
  .isInt({ min: 1 })
  .withMessage("Количество страниц должно быть больше 0");

const year = body("year")
  .optional()
  .isNumeric()
  .withMessage("Год издания должен быть числом")
  .isInt({ min: 1 })
  .withMessage("Год издания должен быть больше 0");

const desc = body("desc")
  .optional()
  .isLength({ min: 2 })
  .withMessage("Описание книги должно содержать не менее 2 символов");

const isbn13 = body("isbn13")
  .notEmpty()
  .withMessage("Требуется указать ISBN13 книги")
  .matches(/^\d{13}$/) // проверка на цифры длиной 13 символов
  .withMessage(
    "ISBN13 книги должен состоять только из цифр и быть длиной 13 символов"
  );

const price = body("price")
  .optional()
  .isLength({ min: 1 })
  .withMessage("Цена книги должна содержать хотя бы один символ");

const image = body("image")
  .optional()
  .isURL()
  .withMessage("URL изображения книги недействителен");

const url = body("url")
  .optional()
  .isURL()
  .withMessage("URL книги недействителен");

const owner = body("owner")
  .optional()
  .isMongoId()
  .withMessage("ID владельца книги недействителен");

export const createBookValidator = createCustomValidatorMiddleware([
  title,
  authors,
  publisher,
  pages,
  year,
  desc,
  isbn13,
  price,
  image,
  url,
  owner,
]);
