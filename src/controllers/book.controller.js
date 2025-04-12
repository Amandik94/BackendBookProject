import { Book } from "../models/Book.js";

// POST /api/books — создать книгу
const createBook = async (req, res) => {
  try {
    const book = await Book.create({ ...req.body, owner: req.user._id });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: "Не удалось создать книгу" });
  }
};

// GET /api/books — получить все книги
const getBooks = async (req, res) => {
  try {
    const { q, page = 1, limit = 10 } = req.query;

    // Преобразуем параметры page и limit в числа
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    // Проверяем, что pageNumber и limitNumber — это положительные числа
    if (pageNumber <= 0 || limitNumber <= 0) {
      return res.status(400).json({ message: "Неверные параметры пагинации" });
    }

    let books;
    const query = {};

    if (q) {
      query.$or = [
        { title: new RegExp(q, "i") }, // Поиск по названию
        { authors: new RegExp(q, "i") }, // Поиск по авторам
      ];
    }

    // Получаем книги с учетом пагинации
    books = await Book.find(query)
      .skip((pageNumber - 1) * limitNumber) // Пропускаем книги на основе номера страницы
      .limit(limitNumber) // Ограничиваем количество книг на странице
      .sort({ createdAt: -1 });

    // Получаем общее количество книг, чтобы посчитать количество страниц
    const totalBooks = await Book.countDocuments(query);

    // Отправляем ответ с книгами и информацией о пагинации
    res.json({
      books,
      totalPages: Math.ceil(totalBooks / limitNumber),
      currentPage: pageNumber,
      totalBooks,
    });
  } catch (err) {
    res.status(500).json({ message: "Не удалось показать книги" });
  }
};

// GET /api/books/:id — получить книгу по ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Книга не найдена" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Не удалось показать книгу" });
  }
};

// PUT /api/books/:id — обновить книгу
const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Книга не найдена" });

    if (book.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Недостаточно прав" });
    }

    Object.assign(book, req.body);
    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Не удалось обновить книгу" });
  }
};

// DELETE /api/books/:id — удалить книгу
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Книга не найдена" });

    if (book.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Недостаточно прав" });
    }

    await book.deleteOne();
    res.json({ message: "Книга удалена" });
  } catch (err) {
    res.status(500).json({ message: "Не удалось удалить книгу" });
  }
};

export { createBook, getBooks, getBookById, updateBook, deleteBook };
