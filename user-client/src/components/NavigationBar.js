import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">WebAuth IV</NavbarBrand>
      <NavbarToggler onClick={e => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/signup" tag={RouterNavLink}>
              Sign Up
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login" tag={RouterNavLink}>
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/users" tag={RouterNavLink}>
              Users
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
