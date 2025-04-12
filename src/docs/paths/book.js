const bookPaths = {
    "/api/books": {
      get: {
        summary: "Получить все книги",
        tags: ["Book"],
        responses: {
          200: {
            description: "Успешно получены книги",
          },
          404: {
            description: "Книги не найдены",
          },
        },
        security: [
          {
            BearerAuth: [],
          },
        ],
      },
      post: {
        summary: "Создать новую книгу",
        tags: ["Book"],
        responses: {
          201: {
            description: "Книга успешно создана",
          },
          400: {
            description: "Недопустимые входные данные",
          },
        },
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/Book",
              },
            },
          },
        },
        security: [
          {
            BearerAuth: [],
          },
        ],
      },
    },
    "/api/books/{bookId}": {
      get: {
        summary: "Получить книгу по ID",
        tags: ["Book"],
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
            description: "Успешно получена книга",
          },
          404: {
            description: "Книга не найдена",
          },
        },
        security: [
          {
            BearerAuth: [],
          },
        ],
      },
      put: {
        summary: "Обновить книгу по ID",
        tags: ["Book"],
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
            description: "Книга успешно обновлена",
          },
          400: {
            description: "Недопустимые входные данные",
          },
          404: {
            description: "Книга не найдена",
          },
        },
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/Book",
              },
            },
          },
        },
        security: [
          {
            BearerAuth: [],
          },
        ],
      },
      delete: {
        summary: "Удалить книгу по ID",
        tags: ["Book"],
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
            description: 'Книга с ID "{bookId}" успешно удалена',
          },
          404: {
            description: 'Книга с ID "{bookId}" не найдена',
          },
        },
        security: [
          {
            BearerAuth: [],
          },
        ],
      },
    },
  };
  
  export default bookPaths;  