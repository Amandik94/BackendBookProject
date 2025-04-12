import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (id) => {
    try {
      return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
    } catch (error) {
      console.error("Ошибка при генерации токена:", error);
      throw new Error("Ошибка генерации токена");
    }
  };

export default generateToken;