import bcrypt from "bcryptjs";

export async function hashPassword(plainPassword) {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(plainPassword, salt);
  } catch (error) {
    console.error("Ошибка при хешировании пароля:", error);
    throw new Error("Ошибка хеширования пароля");
  }
}

export async function checkValidPassword(plainPassword, hashedPassword) {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    console.error("Ошибка при проверке пароля:", error);
    throw new Error("Ошибка проверки пароля");
  }
}
