import React from "react";

import { connect } from "react-redux";
import { bookForm } from "../actions/bookForm.js";
import { createBook } from "../actions/bookForm.js";

const BookForm = () => {
  const handleChange = event => {
    const { name, value } = event.target;
    bookForm(name, value);
  };

  return (
    <form>
      <input placeholder="name" name="name" onChange={handleChange} />
      <br />
      <input placeholder="author" name="author" onChange={handleChange} />
      <br />
      <input
        placeholder="description"
        name="description"
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Create Book" />
    </form>
  );
};

export default BookForm;
