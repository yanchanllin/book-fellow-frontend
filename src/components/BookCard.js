import React from "react";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard.js";

const BookCard = ({ book, deleteBook }) => {
  return book ? (
    <div>
      <h3> Title: "{book.attributes.name}" </h3>
      <li>
        By: {book.attributes.author} <br />
        [description: {book.attributes.description}] Review:{" "}
        <ReviewCard reviews={book.attributes.reviews} />
      </li>
      <br />
      <Link to={`/books/${book.id}/edit`}>Edit this book</Link>
      <br />
      <button onClick={() => deleteBook(book.id)}>DELETE</button>
    </div>
  ) : (
      <p>This the the BOOK card with no BOOK!</p>
    );
};

export default BookCard;

//This page is for css of books
