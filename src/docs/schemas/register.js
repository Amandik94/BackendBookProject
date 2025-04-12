const registerUserSchema = {
    type: "object",
    required: ["username", "email", "password"],
    properties: {
      username: {
        type: "string",
        example: "booklover99"
      },
      email: {
        type: "string",
        format: "email",
        example: "reader@mail.kz"
      },
      password: {
        type: "string",
        example: "securepassword123"
      }
    }
  };

  export default registerUserSchema;