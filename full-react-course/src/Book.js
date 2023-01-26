import React from "react";

const Book = (props) => {
  const { img, title, author } = props.book;
  const clickHandler = () => {
    alert("hello there");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        referrence
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex
      </button>
    </article>
  );
};

export default Book;
