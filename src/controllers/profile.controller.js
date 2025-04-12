import e from 'express';
import { Profile } from '../models/Profile.js';


// Получить свой профиль
const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) return res.status(404).json({ message: 'Профиль не найден' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось получить профиль' });
  }
};

// Создать или обновить профиль
const upsertMyProfile = async (req, res) => {
  const { name, avatar, bio } = req.body;

  try {
    const data = { name, avatar, bio, user: req.user._id };

    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      data,
      { new: true, upsert: true }
    );

    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось обновить/создать профиль' });
  }
};

// Добавить книгу в избранное
const addFavoriteBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const profile = await Profile.findOne({ user: req.user._id });

    if (!profile) {
      return res.status(404).json({ message: 'Профиль не найден' });
    }

    if (profile.favoriteBooks.includes(bookId)) {
      return res.status(400).json({ message: 'Эта книга уже в избранном' });
    }

    profile.favoriteBooks.push(bookId);
    await profile.save();

    res.status(200).json({ message: 'Книга добавлена в избранное', favoriteBooks: profile.favoriteBooks });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при добавлении книги в избранное' });
  }
};

// Удалить книгу из избранного
const removeFavoriteBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const profile = await Profile.findOne({ user: req.user._id });

    if (!profile) {
      return res.status(404).json({ message: 'Профиль не найден' });
    }

    const bookIndex = profile.favoriteBooks.indexOf(bookId);
    if (bookIndex === -1) {
      return res.status(400).json({ message: 'Эта книга не в избранном' });
    }

    profile.favoriteBooks.splice(bookIndex, 1);
    await profile.save();

    res.status(200).json({ message: 'Книга удалена из избранного', favoriteBooks: profile.favoriteBooks });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при удалении книги из избранного' });
  }
};

// Получить все избранные книги пользователя
const getFavoriteBooks = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id }).populate('favoriteBooks');
    if (!profile) {
      return res.status(404).json({ message: 'Профиль не найден' });
    }

    res.status(200).json({ favoriteBooks: profile.favoriteBooks });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при получении избранных книг' });
  }
};


export { getMyProfile, upsertMyProfile, addFavoriteBook, removeFavoriteBook, getFavoriteBooks };