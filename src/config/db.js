import mongoose from "mongoose";
import "dotenv/config";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Подключено к базе данных!");
    } catch (error) {
        console.error("❌ Ошибка подключения к базе данных:", error.message);
        process.exit(1);
    }
}