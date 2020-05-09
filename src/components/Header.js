import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
    return (
        <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
 <div>
    <ul>
    <li>COVID19 Tracker</li>
      <li>
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/page-2/"className="nav-link">Global</Link>
      </li>
      <li class="nav-item">
        <Link to="/page-3/" className="nav-link">India</Link>
      </li>
    </ul>
  </div>
</nav>
    </header>
    );
};

export default Header;