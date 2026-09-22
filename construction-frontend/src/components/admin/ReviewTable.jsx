import React from "react";

const ReviewTable = ({
  reviews = [],
  onDelete
}) => {

  const styles = {

    wrapper:
      "bg-white rounded-xl shadow border border-gray-200 overflow-hidden",

    scroll:
      "overflow-x-auto",

    table:
      "w-full",

    thead:
      "bg-[#F8FAFC]",

    th:
      "px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500",

    td:
      "px-6 py-5 border-t border-gray-100 text-sm text-gray-700 align-top",

    deleteButton:
      "bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition font-semibold",

    empty:
      "text-center py-10 text-gray-500",

    stars:
      "text-yellow-500 text-lg",

    avatar:
      "w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold",

    reviewText:
      "max-w-sm leading-6"
  };

  const renderStars = (rating) => {

    return [...Array(5)].map((_, index) => (

      <span
        key={index}
        className={
          index < rating
            ? "text-yellow-400"
            : "text-gray-300"
        }
      >
        ★
      </span>

    ));

  };

  return (

    <div className={styles.wrapper}>

      <div className={styles.scroll}>

        <table className={styles.table}>

          <thead className={styles.thead}>

            <tr>

              <th className={styles.th}>
                Client
              </th>

              <th className={styles.th}>
                Rating
              </th>

              <th className={styles.th}>
                Review
              </th>

              <th className={styles.th}>
                Date
              </th>

              <th className={styles.th}>
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {reviews.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className={styles.empty}
                >
                  No Reviews Found
                </td>

              </tr>

            ) : (

              reviews.map((review) => (

                <tr
                  key={review.id}
                >

                  <td className={styles.td}>

                    <div className="flex items-center gap-3">

                      <div className={styles.avatar}>

                        {review.clientName
                          ?.charAt(0)
                          .toUpperCase()}

                      </div>

                      <div>

                        <div className="font-bold">

                          {review.clientName}

                        </div>

                      </div>

                    </div>

                  </td>

                  <td className={styles.td}>

                    <div className={styles.stars}>

                      {renderStars(
                        review.rating
                      )}

                    </div>

                  </td>

                  <td className={styles.td}>

                    <div className={styles.reviewText}>

                      {review.review}

                    </div>

                  </td>

                  <td className={styles.td}>

                    {review.createdAt
                      ? new Date(
                          review.createdAt
                        ).toLocaleDateString()
                      : ""}

                  </td>

                  <td className={styles.td}>

                    <button

                      className={
                        styles.deleteButton
                      }

                      onClick={() =>
                        onDelete(
                          review.id
                        )
                      }

                    >

                      Delete

                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default ReviewTable;