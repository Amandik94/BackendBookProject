const reviewPaths = {
    "/api/reviews/{bookId}": {
      get: {
        summary: "Получить отзывы по книге",
        tags: ["Review"],
        parameters: [
          {
            name: "bookId",
            in: "path",
            required: true,
            description: "ID книги",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Успешно получены отзывы",
          },
          404: {
            description: "Книга не найдена",
          },
        },
        security: [
          {
            BearerAuth: []
          }
        ]
      },
      post: {
        summary: "Создать отзыв на книгу",
        tags: ["Review"],
        parameters: [
          {
            name: "bookId",
            in: "path",
            required: true,
            description: "ID книги",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Review",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Отзыв успешно создан",
          },
          400: {
            description: "Недопустимые входные данные",
          },
        },
        security: [
          {
            BearerAuth: []
          }
        ]
      },
    },
    "/api/reviews/{id}": {
      delete: {
        summary: "Удалить отзыв",
        tags: ["Review"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID отзыва",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Отзыв успешно удалён",
          },
          404: {
            description: "Отзыв не найден",
          },
        },
        security: [
          {
            BearerAuth: []
          }
        ]
      },
    },
  };
  
  export default reviewPaths;
  