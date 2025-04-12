const profileSchema = {
    type: "object",
    properties: {
      user: {
        type: "string",
        format: "uuid",
        description: "Уникальный идентификатор пользователя (ID)",
        example: "507f1f77-bc64-4b18-a2f5-66cc8f9a3eac"
      },
      name: {
        type: "string",
        maxLength: 50,
        description: "Имя пользователя",
        example: "Алихан"
      },
      avatar: {
        type: "string",
        format: "uri",
        description: "URL к аватару пользователя",
        example: "https://example.com/avatar.jpg"
      },
      bio: {
        type: "string",
        maxLength: 500,
        description: "Краткая биография пользователя",
        example: "Люблю читать фэнтези и писать отзывы на книги."
      },
      favoriteBooks: {
        type: "array",
        description: "Массив ID избранных книг пользователя",
        items: {
          type: "string",
          format: "uuid",
          example: "60d21b4667d0d8992e610c85"
        }
      }
    }
  };
  
  export default profileSchema;
  