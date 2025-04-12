import express from "express";
import { connectDB } from "./src/config/db.js"; // Подключаемся к базе данных
import authRoutes from "./src/routes/auth.routes.js"; // Подключаем маршруты аутентификации
import bookRoutes from "./src/routes/book.routes.js"; // Подключаем маршруты книг
import reviewRoutes from "./src/routes/review.routes.js"; // Подключаем маршруты отзывов
import profileRoutes from "./src/routes/profile.routes.js"; // Подключаем маршруты профиля
import { setupSwagger } from "./src/docs/swagger.js"; // Подключаем Swagger для документации API
import cors from "cors";

const app = express();
const PORT = 7000;

app.use(express.json());
app.use(cors()); // Подключаем CORS

app.use('/api/auth', authRoutes); // Добавляем маршруты для аутентификации
app.use('/api/books', bookRoutes); // Добавляем маршруты для книг
app.use('/api/reviews', reviewRoutes); // Добавляем маршруты для отзывов
app.use('/api/profile', profileRoutes); // Добавляем маршруты для профиля

app.use((err, req, res, next) => {
  console.error("Ошибка сервера:", err.stack);
  res.status(500).json({ message: "Внутренняя ошибка сервера" });
});

app.listen(PORT, async () => {
  try {
    await connectDB();
    setupSwagger(app);
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  } catch (err) {
    console.error("❌ Не удалось запустить сервер:", err.message);
    process.exit(1);
  }
});