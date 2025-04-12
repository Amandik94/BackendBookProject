import { User } from "../models/User.js";
import  generateToken  from "../utils/generate.token.js";
import { hashPassword, checkValidPassword } from "../services/bcrypt.js";
import { Profile } from "../models/Profile.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Все поля обязательны" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Пользователь уже существует" });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Создание аватара по умолчанию
    // Используем библиотеку DiceBear для генерации аватара
    const avatarUrl = `https://avatars.dicebear.com/api/initials/${encodeURIComponent(email)}.svg`;


    // Автосоздание профиля
    await Profile.create({
      user: user._id,
      name: email.split("@")[0], // имя по умолчанию
      avatar: avatarUrl, // URL на изображение
      bio: "",
      social: {},
    });

    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Введите email и пароль" });
    }

    const user = await User.findOne({ email });

    if (user && (await checkValidPassword(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: "Неверный email или пароль" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

export { registerUser, loginUser };
