const userSchema = {
    type: "object",
    required: ["username", "email", "password"],
    properties: {
      _id: {
        type: "string",
        example: "66126e89e7c0c8a3878a7521",
      },
      username: {
        type: "string",
        description: "Имя пользователя",
        example: "booklover88",
      },
      email: {
        type: "string",
        description: "Адрес электронной почты пользователя",
        example: "example@mail.kz",
      },
      password: {
        type: "string",
        description: "Хэшированный пароль (bcrypt)",
        example: "$2a$10$wxyzHashExampleString",
      },
    },
  };
  
  export default userSchema;  