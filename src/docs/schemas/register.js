const registerUserSchema = {
    type: "object",
    required: ["user", "email", "password"],
    properties: {
      user: {
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