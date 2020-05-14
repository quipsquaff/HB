import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './navBar.css'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className = "NavBarContainer">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/hb">H.B.</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink className = "NavFonts" href="/hb/noctusign">NoctuSign</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = "NavFonts" href="/hb/customdesigns">Custom Designs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = "NavFonts" href="/hb/contactus">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = "NavFonts" href="/hb/aboutus">About Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
