// sync actions

export const bookForm = (name, value) => {
  const formData = { name, value };
  return {
    type: "UPDATE_NEW_BOOK_FORM",
    formData
  };
};
//async actions
export const createBook = bookData => {
  return dispatch => {
    const sendableBookData = {
      name: bookData.name,
      author: bookData.author,
      description: bookData.description,
      user_id: bookData.userId
    };
    return fetch("http://localhost:3000/api/v1/books", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableBookData)
    })
      .then(r => r.json())
      .then(console.log)
      .catch(console.log);
  };
};
