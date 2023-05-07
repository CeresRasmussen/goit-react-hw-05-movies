import { useEffect, useState } from 'react';
import { fetchMovieByQuery } from 'services/api-fetches';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      const getMovie = async query => {
        const {
          data: { results },
        } = await fetchMovieByQuery(query);
        setMovie(results);
        console.log('data:', results);

        setLoading(false);
      };
      getMovie(query);
    }
  }, [query]);

  const onSubmitForm = searchedMovie => {
    console.log('searchedMovie:', searchedMovie);
    setQuery(searchedMovie);
  };

  return (
    <>
      <Searchbar onSubmitForm={onSubmitForm}></Searchbar>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <ul>
              {movie.map(({ original_title, id }) => {
                return (
                  <li key={id}>
                    <Link to={`/Movies/${id}`} state={{ from: location }}>
                      {original_title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Movies;
