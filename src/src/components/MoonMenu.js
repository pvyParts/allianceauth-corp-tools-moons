import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

import NavLink from "./NavLinkActive";

const MoonMenu = ({ futureExtractions = false, observers = false }) => {
  return (
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <Navbar.Brand>Moon Board</Navbar.Brand>
          <NavLink key="active" href={`#/active`}>
            Active Moons
          </NavLink>
          {futureExtractions ? (
            <NavLink key="future" href={`#/future`}>
              Future Extractions
            </NavLink>
          ) : (
            <></>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MoonMenu;