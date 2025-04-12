const bookSchema = {
    type: "object",
    required: ["title", "authors", "price", "image"], // обязательные поля при создании
    properties: {
      _id: {
        type: "string",
        description: "Уникальный идентификатор книги",
        example: "60d21b4667d0d8992e610c85"
      },
      title: {
        type: "string",
        description: "Название книги",
        example: "Властелин Колец"
      },
      subtitle: {
        type: "string",
        description: "Подзаголовок книги",
        example: "Братство Кольца"
      },
      authors: {
        type: "string",
        description: "Авторы книги",
        example: "Дж. Р. Р. Толкин"
      },
      publisher: {
        type: "string",
        description: "Издатель книги",
        example: "АСТ"
      },
      pages: {
        type: "number",
        description: "Количество страниц в книге",
        example: 544
      },
      year: {
        type: "number",
        description: "Год издания книги",
        example: 2023
      },
      desc: {
        type: "string",
        description: "Описание книги",
        example: "Эпическое фэнтези о путешествии во имя спасения Средиземья."
      },
      isbn13: {
        type: "string",
        description: "ISBN-13 книги",
        example: "9781234567890"
      },
      price: {
        type: "string",
        description: "Цена книги",
        example: "3500₸"
      },
      image: {
        type: "string",
        format: "uri",
        description: "URL на изображение обложки книги",
        example: "https://example.com/image.jpg"
      },
      url: {
        type: "string",
        format: "uri",
        description: "URL на страницу книги",
        example: "https://example.com/book"
      }
    }
  };
  
  export default bookSchema;  