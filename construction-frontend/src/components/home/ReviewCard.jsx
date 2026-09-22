import React from "react";

const ReviewCard = ({ review }) => {

  const styles = {

    card:
      "min-w-[380px] max-w-[380px] bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 mx-4 flex-shrink-0",

    top:
      "flex items-center justify-between mb-4",

    avatar:
      "w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold",

    name:
      "text-lg font-bold text-[#0F172A]",

    date:
      "text-xs text-gray-500 mt-1",

    stars:
      "flex gap-1 mt-3",

    review:
      "mt-5 text-gray-600 leading-7 text-sm italic",

    quote:
      "text-5xl text-blue-200 font-serif leading-none",

    verified:
      "mt-5 inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"
  };

  const renderStars = () => {

    return [...Array(5)].map((_, index) => (

      <span
        key={index}
        className={`text-2xl ${
          index < review.rating
            ? "text-yellow-400"
            : "text-gray-300"
        }`}
      >
        ★
      </span>

    ));

  };

  const firstLetter =
    review.clientName
      ? review.clientName.charAt(0).toUpperCase()
      : "?";

  return (

    <div className={styles.card}>

      <div className={styles.top}>

        <div className="flex items-center gap-4">

          <div className={styles.avatar}>
            {firstLetter}
          </div>

          <div>

            <h3 className={styles.name}>
              {review.clientName}
            </h3>

            <p className={styles.date}>
              {review.createdAt
                ? new Date(
                    review.createdAt
                  ).toLocaleDateString()
                : ""}
            </p>

          </div>

        </div>

      </div>

      <div className={styles.stars}>
        {renderStars()}
      </div>

      <div className={styles.quote}>
        "
      </div>

      <p className={styles.review}>
        {review.review}
      </p>

      <div className={styles.verified}>
        ✓ Verified Customer
      </div>

    </div>

  );

};

export default ReviewCard;