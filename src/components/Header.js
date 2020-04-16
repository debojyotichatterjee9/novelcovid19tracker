import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Novel COVID19 Tracker</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2/">Global</Link>
          </li>
          <li>
            <Link to="/page-3/">India</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
