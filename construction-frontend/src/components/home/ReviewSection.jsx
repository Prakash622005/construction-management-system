import React, { useEffect, useState } from "react";
import { getReviews } from "../../api/reviewApi";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {

  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchReviews();

  }, []);

  const fetchReviews = async () => {

    try {

      const response =
        await getReviews();

      setReviews(response);

    } catch (error) {

      console.error(
        "Failed to Load Reviews",
        error
      );

    } finally {

      setLoading(false);

    }

  };

  const styles = {

    section:
      "py-24 bg-[#F8FAFC] overflow-hidden",

    container:
      "max-w-7xl mx-auto px-6",

    heading:
      "text-4xl font-extrabold text-center text-[#0F172A] mb-3",

    subHeading:
      "text-center text-gray-500 max-w-3xl mx-auto mb-12",

    sliderWrapper:
      "relative overflow-hidden mt-16",

    sliderTrack:
      "flex w-max animate-marquee hover:[animation-play-state:paused]",

    emptyState:
      "text-center py-10 text-gray-500",

    loading:
      "text-center py-10 text-blue-600 text-lg font-semibold"

  };

  if (loading) {

    return (

      <section className={styles.section}>

        <div className={styles.container}>

          <h2 className={styles.loading}>
            Loading Reviews...
          </h2>

        </div>

      </section>

    );

  }

  return (

    <section
      id="reviews"
      className={styles.section}
    >

      <div className={styles.container}>

        <h2 className={styles.heading}>
          What Our Clients Say
        </h2>

        <p className={styles.subHeading}>
          Customer satisfaction is the foundation of every
          project we deliver. Read what our clients have
          shared about their experience with Skyline Design &
          Construction.
        </p>

        {/* Review Form */}

        <ReviewForm
          onReviewAdded={fetchReviews}
        />

        {/* Review Slider */}

        <div className={styles.sliderWrapper}>

          {reviews.length === 0 ? (

            <div className={styles.emptyState}>
              No Reviews Yet.
            </div>

          ) : (

            <div className={styles.sliderTrack}>

              {/* First Set */}

              {reviews.map((review) => (

                <ReviewCard
                  key={review.id}
                  review={review}
                />

              ))}

              {/* Duplicate Set for Infinite Scroll */}

{/*               {reviews.map((review) => ( */}

{/*                 <ReviewCard */}
{/*                   key={`duplicate-${review.id}`} */}
{/*                   review={review} */}
{/*                 /> */}

{/*               ))} */}

            </div>

          )}

        </div>

      </div>

      {/* Animation */}

      <style>

        {`

        @keyframes marquee {

          0% {

            transform: translateX(0);

          }

          100% {

            transform: translateX(-50%);

          }

        }

        .animate-marquee {

          animation: marquee 35s linear infinite;

        }

      `}

      </style>

    </section>

  );

};

export default ReviewSection;