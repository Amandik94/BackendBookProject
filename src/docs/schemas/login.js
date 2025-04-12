const loginUserSchema = {
    type: "object",
    required: ["email", "password"],
    properties: {
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

  export default loginUserSchema;