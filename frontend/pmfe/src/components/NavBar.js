import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class TopBar extends React.Component {
  render() {
    console.log(Navbar.propTypes)
    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ProdMan</NavbarBrand>
          <Nav className="navbar mr-auto">
            <NavItem>
              <NavLink href="/">Ordens</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Produtos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Stocks</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
    );
  }
}