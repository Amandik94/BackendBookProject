const reviewSchema = {
    type: "object",
    required: ["book", "user", "comment"],
    properties: {
      _id: {
        type: "string",
        description: "Уникальный идентификатор отзыва",
        example: "66126e89e7c0c8a3878a7522",
      },
      book: {
        type: "string",
        description: "Уникальный идентификатор книги",
        example: "66126e89e7c0c8a3878a7521",
      },
      user: {
        type: "string",
        description: "Уникальный идентификатор пользователя",
        example: "66126e89e7c0c8a3878a7520",
      },
      comment: {
        type: "string",
        description: "Текст отзыва",
        example: "Очень интересная и полезная книга!",
      },
      createdAt: {
        type: "string",
        format: "date-time",
        description: "Дата создания отзыва",
        example: "2025-04-12T08:34:15.234Z",
      },
    },
  };
  
  export default reviewSchema;
  