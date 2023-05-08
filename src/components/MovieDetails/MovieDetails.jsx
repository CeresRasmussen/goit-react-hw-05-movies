import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/api-fetches';
import { Loader } from 'components/Loader/Loader';
import styled from 'styled-components';

import css from 'components/MovieDetails/MovieDetails.module.css';
const BackLink = lazy(() => import('../BackLink/BackLink'));

const StyledLink = styled(NavLink)`
  display: flex;
  color: black;
  align-items: center;
}

  &.active {
    color: aliceblue;
    background-color: orange;
    border-color: aliceblue;
  }
`;

const MovieDetails = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieid: movie_id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data } = await fetchMovieById(movie_id);
      setMovie(data);
      setLoading(false);
      setGenres(data.genres);
    };

    fetchData();
    // eslint-disable-next-line
  }, [movie_id]);

  return (
    <div className={css.container}>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <BackLink to={backLinkHref}>Go Back</BackLink>
          <div className={css.movieContainer}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width={350}
              />
            ) : (
              <img
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                }
                alt={movie.title}
                width={350}
                className={css.noImage}
              />
            )}
            {movie.release_date && (
              <div>
                <h2 className={css.movieTitle}>
                  {movie.original_title} ({movie.release_date.slice(0, 4)})
                </h2>
                <p>User Score: {Math.ceil(movie.vote_average * 10)}%</p>
                <h3 className={css.subTitle}>Overview</h3>
                <p>{movie.overview}</p>
                <h3 className={css.subTitle}>Genres</h3>
                <p>{genres.map(genre => genre.name).join(', ')}</p>
                <div className={css.detailsLinks}>
                  <StyledLink
                    to="Cast"
                    state={{ from: backLinkHref }}
                    className={css.moreInfo}
                  >
                    Cast
                  </StyledLink>
                  <StyledLink
                    to="Reviews"
                    state={{ from: backLinkHref }}
                    className={css.moreInfo}
                  >
                    Reviews
                  </StyledLink>
                </div>
              </div>
            )}
          </div>

          <Suspense fallback={<Loader></Loader>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
