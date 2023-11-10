import { createContext, useState } from "react";

// type Value = {
//   books: IBook[];
//   addBook: (book: IBook) => void;
//   removeBook: (id: number) => void;
// };

// interface IBook {
//   id: number;
//   title: string;
// }

export const CustomContext = createContext();

export const Context = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: "JS" },
    { id: 2, title: "React" },
    { id: 3, title: "TS" },
  ]);

  const addBook = (book) => {
    setBooks([book, ...books]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const value = {
    books,
    addBook,
    removeBook,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
