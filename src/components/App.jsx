import { Suspense, lazy } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
// import { Loader } from './Loader/Loader';
import css from 'components/app.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: flex;
  color: black;
  align-items: center;
}

  &.active {
    color: orange;
  }
`;

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div className={css.container}>
      <header>
        <nav className={css.navigate}>
          <StyledLink to="/" end>
            <span className={css.icon}></span>
          </StyledLink>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/Movies">Movies</StyledLink>
        </nav>
      </header>

      <Suspense>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movies/:movieid" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <footer>
        <div className={css.footerLogo}>
          <StyledLink to="/" end>
            <span className={css.icon}></span>
          </StyledLink>
          <h2 className={css.footerTitle}>FILMOTEKA</h2>
        </div>
        <p className={css.text}>Developed by </p>
        <span className={css.text}>
          <a
            href="https://www.linkedin.com/in/volodymyr-sobko-3b199a232/"
            target="_blank"
            rel="noreferrer"
          >
            Volodymyr Sobko
          </a>
        </span>
      </footer>
    </div>
  );
};
