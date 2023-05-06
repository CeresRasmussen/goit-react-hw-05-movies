import { useState, useEffect } from 'react';
import { fetchPopularMovie } from '../../services/api-fetches';
import { Link, useLocation } from 'react-router-dom';
// import css from 'components/Home/Home.module.css';

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
      setPopularMovie(results);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Trending today</h1>
          <ul>
            {popularMovie.map(({ original_title, id }) => {
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
  );
};

export default Home;
