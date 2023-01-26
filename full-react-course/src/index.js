import React from "react";
import ReactDOM from "react-dom";

import Test from "./Test";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));
