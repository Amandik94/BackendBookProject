const profilePaths = {
    "/api/profile/me": {
      get: {
        summary: "Получить профиль пользователя",
        tags: ["Profile"],
        responses: {
          200: {
            description: "Успешно получен профиль",
          },
          401: {
            description: "Необходима аутентификация",
          },
        },
        security: [
          {
            BearerAuth: [],
          },
        ],
      },
      post: {
        summary: "Обновить профиль пользователя",
        tags: ["Profile"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Profile",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Профиль успешно обновлен",
          },
          400: {
            description: "Недопустимые входные данные",
          },
          401: {
            description: "Необходима аутентификация",
          },
        },
        security: [
          {
            BearerAuth: [],
          },
        ],
      },
    },
    "/api/profile/me/favorites": {
      get: {
        summary: "Получить избранные книги пользователя",
        tags: ["Profile"],
        responses: {
          200: {
            description: "Успешно получены избранные книги",
          },
          401: {
            description: "Необходима аутентификация",
          },
        },
        security: [
          {
            BearerAuth: []
          }
        ]
      },
      post: {
        summary: "Добавить книгу в избранное",
        tags: ["Profile"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  bookId: { type: "string", description: "ID книги" },
                },
                required: ["bookId"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Книга успешно добавлена в избранное",
          },
          400: {
            description: "Недопустимые входные данные",
          },
          401: {
            description: "Необходима аутентификация",
          },
        },
        security: [
          {
            BearerAuth: []
          }
        ]
      },
    },
    "/api/profile/me/favorites/{bookId}": {
      delete: {
        summary: "Удалить книгу из избранного",
        tags: ["Profile"],
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
            description: "Книга успешно удалена из избранного",
          },
          400: {
            description: "Недопустимые входные данные",
          },
          401: {
            description: "Необходима аутентификация",
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
  
  export default profilePaths;
 