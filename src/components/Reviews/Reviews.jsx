import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/api-fetches';

const Reviews = () => {
  const { movieid: movie_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchReviewsData = async () => {
      const {
        data: { results },
      } = await fetchReviews(movie_id);
      console.log(results);
      setReviews(results);
      setLoading(false);
    };

    fetchReviewsData();
  }, [movie_id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reviews.length !== 0 ? (
            reviews.map(review => {
              return (
                <li key={review.id}>
                  <h4>Author: {review.author}</h4>
                  <p>"{review.content}"</p>
                </li>
              );
            })
          ) : (
            <p>There are no reviews yet...</p>
          )}
        </ul>
      )}
    </>
  );
};
export default Reviews;
