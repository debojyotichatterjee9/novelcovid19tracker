import React from 'react';
import { Link } from 'gatsby';
import Container from 'components/Container';
import { Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
<Navbar bg="dark" expand="sm" fixed="top" variant="dark">
  <Navbar.Brand href="/">COVID19 Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/page-2/">Global</Nav.Link>
      <Nav.Link href="/page-3/">India</Nav.Link>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="https://coronavirus.jhu.edu/map.html" target="_blank">John Hopkins University COVID Tracker</NavDropdown.Item>
        <NavDropdown.Item href="https://www.covid19india.org/" target="_blank">COVID19 Tracker India</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://www.google.com/search?q=covid 19 latest updates" target="_blank">Latest Updates</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline action="http://google.com/search" target="_blank">
      <FormControl name="q" type="text" placeholder="Search" className="mr-sm-2" />
      <Button type="submit" variant="outline-warning">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

    </header>
    );
};

export default Header;