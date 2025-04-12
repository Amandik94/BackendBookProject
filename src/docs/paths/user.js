const userPaths = {
    "/api/auth/register": {
      post: {
        summary: "Зарегистрировать нового пользователя",
        tags: ["User"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/RegisterUser"
              }
            }
          }
        },
        responses: {
          201: {
            description: "Пользователь успешно зарегистрирован"
          },
          400: {
            description: "Недопустимые входные данные"
          }
        }
      }
    },
    "/api/auth/login": {
      post: {
        summary: "Войти в систему",
        tags: ["User"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoginUser"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Успешный вход"
          },
          400: {
            description: "Недопустимые входные данные"
          }
        }
      }
    }
  };
  
  export default userPaths;
  