import React, { useState } from "react";
import { addReview } from "../../api/reviewApi";

const ReviewForm = ({ onReviewAdded }) => {

  const [reviewData, setReviewData] = useState({
    clientName: "",
    rating: 5,
    review: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value
    });

  };

  const handleRating = (rating) => {

    setReviewData({
      ...reviewData,
      rating
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (reviewData.clientName.trim() === "") {

      alert("Please Enter Your Name");
      return;

    }

    if (reviewData.review.trim() === "") {

      alert("Please Enter Your Review");
      return;

    }

    try {

      setLoading(true);

      await addReview(reviewData);

      alert("Thank You For Your Review ❤️");

      setReviewData({
        clientName: "",
        rating: 5,
        review: ""
      });

      if (onReviewAdded) {
        onReviewAdded();
      }

    } catch (error) {

      console.error(error);

      alert("Failed To Submit Review");

    } finally {

      setLoading(false);

    }

  };

  const styles = {

    wrapper:
      "bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-3xl mx-auto",

    heading:
      "text-3xl font-bold text-center text-[#0F172A] mb-2",

    subHeading:
      "text-center text-gray-500 mb-8",

    input:
      "w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 mb-5",

    textarea:
      "w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none",

    stars:
      "flex justify-center gap-2 mb-5",

    star:
      "text-4xl cursor-pointer transition-all duration-300 hover:scale-125",

    button:
      "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-6 transition",

    counter:
      "text-right text-sm text-gray-500 mt-2"
  };

  return (

    <div className={styles.wrapper}>

      <h2 className={styles.heading}>
        Share Your Experience
      </h2>

      <p className={styles.subHeading}>
        We'd love to hear your feedback about our service.
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="clientName"
          placeholder="Your Name"
          value={reviewData.clientName}
          onChange={handleChange}
          className={styles.input}
          maxLength={50}
        />

        <div className={styles.stars}>

          {[1,2,3,4,5].map((star)=>(
            <span
              key={star}
              onClick={()=>handleRating(star)}
              className={styles.star}
            >
              {star <= reviewData.rating ? "⭐" : "☆"}
            </span>
          ))}

        </div>

        <textarea
          rows="6"
          name="review"
          placeholder="Write Your Experience..."
          maxLength={300}
          value={reviewData.review}
          onChange={handleChange}
          className={styles.textarea}
        />

        <div className={styles.counter}>
          {reviewData.review.length}/300 Characters
        </div>

        <button
          type="submit"
          disabled={loading}
          className={styles.button}
        >

          {loading
            ? "Submitting..."
            : "Submit Review"}

        </button>

      </form>

    </div>

  );

};

export default ReviewForm;