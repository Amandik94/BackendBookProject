import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Схемы (Schemas)
import userSchema from "./schemas/user.js";
import profileSchema from "./schemas/profile.js";
import bookSchema from "./schemas/book.js";
import reviewSchema from "./schemas/review.js";
import registerUserSchema from "./schemas/register.js";
import loginUserSchema from "./schemas/login.js";

// Пути (Paths)
import userPaths from "./paths/user.js";
import reviewPaths from "./paths/review.js";
import profilePaths from "./paths/profile.js";
import bookPaths from "./paths/book.js";

// Объединяем пути в один объект
const paths = {
  ...userPaths,
  ...reviewPaths,
  ...profilePaths,
  ...bookPaths,
};

const swaggerDoc = swaggerJSDoc({
  swaggerDefinition: {
    openapi: "3.1.1",
    info: {
      title: "Bookstore API",
      version: "1.0.0",
      description: "API для управления книгами и отзывами",
    },
    components: {
      schemas: {
        User: userSchema,
        RegisterUser: registerUserSchema,
        LoginUser: loginUserSchema,
        Review: reviewSchema,
        Profile: profileSchema,
        Book: bookSchema,
      },
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      },
    },
    paths, // здесь уже собранный объект всех путей
  },
  apis: [],
});

export function setupSwagger(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}
