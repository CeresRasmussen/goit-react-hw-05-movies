import { useEffect, useState } from 'react';
import { fetchMovieByQuery } from 'services/api-fetches';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Loader } from 'components/Loader/Loader';
import css from 'components/Movies/Movies.module.css';

const initialValue = { query: '' };
const Movies = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParam, setSearchParams] = useSearchParams();

  useEffect(() => {
    setQuery(searchParam.get('search'));
    if (query) {
      setLoading(true);
      const getMovie = async query => {
        const {
          data: { results },
        } = await fetchMovieByQuery(query);
        setMovie(normalizationData(results));

        setLoading(false);
      };
      getMovie(query);
    }
  }, [query, searchParam]);

  const normalizationData = results =>
    results.map(({ title, id, poster_path, release_date }) => {
      const data = {
        title,
        id,
        poster: poster_path,
        date: release_date ? release_date.slice(0, 4) : '',
      };
      return data;
    });

  const onSubmit = ({ query }, { resetForm }) => {
    setQuery(query);
    setSearchParams({ search: query });
    resetForm();
  };

  return (
    <div className={css.container}>
      <div className={css.Searchbar}>
        <Formik initialValues={initialValue} onSubmit={onSubmit}>
          <Form className={css.SearchForm}>
            <Field
              id="query"
              className={css['SearchForm-input']}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search films"
            />
            <button type="submit" className={css['SearchForm-button']}>
              <span className={css['SearchForm-button-label']}>Search</span>
            </button>
          </Form>
        </Formik>
      </div>
      <div>
        {loading ? (
          <Loader></Loader>
        ) : (
          <>
            <ul className={css.moviesList}>
              {movie.map(({ id, poster, title, date }) => (
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
                      <p className={css.movieTitle}>
                        {title} ({date})
                      </p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Movies;
