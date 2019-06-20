import React from "react";

const BookCard = ({ book }) => {
  return <p>{book.attributes.name}</p>;
};

export default BookCard;
