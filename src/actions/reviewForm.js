//synchronous actions
export const reviewForm = (name, value) => {
  const formData = { name, value };
  return {
    type: "UPDATE_NEW_REVIEW_FORM",
    formData
  };
};
//async actions
export const createReview = reviewData => {
  return dispatch => {
    const sendableReviewData = {
      Content: reviewData.content,
      rating: reviewData.rating,
      book_id: reviewData.bookId
    };
    return fetch("http://localhost:3000/api/v1/books/book_id/reviews", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableReviewData)
    })
      .then(r => r.json())
      .then(console.log)
      .catch(console.log);
  };
};
