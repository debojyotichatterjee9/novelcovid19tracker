import React from 'react';
import { Link } from 'gatsby';
import Container from 'components/Container';
import { Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';

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




<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

    </header>
    );
};

export default Header;