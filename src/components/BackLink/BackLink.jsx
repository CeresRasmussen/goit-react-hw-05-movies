// import css from 'components/BackLink/BackLink';

import { Link } from 'react-router-dom';

export const BackLink = ({ to }) => {
  return <Link to={to}>Go back</Link>;
};

export default BackLink;
