import { useEffect, useState } from 'react';
import { fetchCast } from 'services/api-fetches';
import { useParams } from 'react-router-dom';
import css from 'components/Cast/Cast.module.css';
const Cast = () => {
  const { movieid: movie_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchCastData = async () => {
      const {
        data: { cast },
      } = await fetchCast(movie_id);
      setCast(cast);
      setLoading(false);
    };

    fetchCastData();
  }, [movie_id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={css.castList}>
          {cast.map(actor => {
            return (
              <li key={actor.cast_id} className={css.castItem}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                    alt={actor.name}
                    width={200}
                  />
                ) : (
                  <div className={css.noImage}>
                    <p>No Image</p>
                  </div>
                )}

                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
