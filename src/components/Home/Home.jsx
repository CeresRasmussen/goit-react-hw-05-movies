import { useState, useEffect } from 'react';
import { fetchPopularMovie } from '../../services/api-fetches';
import { Link, useLocation } from 'react-router-dom';
import css from 'components/Home/Home.module.css';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const {
        data: { results },
      } = await fetchPopularMovie();
      setPopularMovie(normalizationData(results));
      setLoading(false);
    }

    fetchData();
  }, []);

  const normalizationData = results =>
    results.map(({ title, id, poster_path }) => {
      const data = {
        title,
        id,
        poster: poster_path,
      };
      return data;
    });

  return (
    <div className={css.container}>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <h1 className={css.title}>Trending today</h1>
          <ul className={css.moviesList}>
            {popularMovie.map(({ id, poster, title }) => (
              <li key={id} className={css.movieItem}>
                <Link to={`/Movies/${id}`} state={{ from: location }}>
                  {poster ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${poster}`}
                      alt={title}
                      width={250}
                      className={css.movieImage}
                    />
                  ) : (
                    <img
                      src={
                        'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                      }
                      alt={title}
                      width={250}
                      className={css.noImage}
                    />
                  )}
                  <span className={css.movieDescription}>
                    <p className={css.movieTitle}>{title}</p>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
