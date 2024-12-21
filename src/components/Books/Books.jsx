import { useContext } from "react";
import Book from "../Book/Book";
import { LevelContext } from "../Root/Root";

const Books = () => {
  const books = useContext(LevelContext);
  // console.log(books);
  return (
    <div>
      <h1 className="text-3xl text-center my-8">Books</h1> 

    <div className="grid grid-cols-3 gap-4">
      {
        books.map((book,index) => <Book key={index} book={book}></Book>)
      }
    </div>
    </div>
  );
};

export default Books;