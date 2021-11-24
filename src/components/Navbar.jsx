import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import {
  Nav,
  H1,
  Ul,
  Li,
} from '../styled/navbar';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
    this.openIconRef = React.createRef();
    this.closeIconRef = React.createRef();
  }

  handelNavbar = () => {
    if (this.openIconRef.current.classList.contains('d-none')) {
      this.menuRef.current.classList.remove('open');
      this.openIconRef.current.classList.remove('d-none');
      return this.closeIconRef.current.classList.add('d-none');
    }
    this.menuRef.current.classList.add('open');
    this.closeIconRef.current.classList.remove('d-none');
    return this.openIconRef.current.classList.add('d-none');
  };

  render() {
    return (
      <Nav>
        <H1 className="logo">
          Math Magicians
        </H1>
        <div className="open-icon" ref={this.openIconRef}>
          <GiHamburgerMenu className="menu-icons" onClick={this.handelNavbar} />
        </div>
        <div className="close-icon d-none" ref={this.closeIconRef}>
          <AiOutlineClose className="menu-icons" onClick={this.handelNavbar} />
        </div>
        <Ul ref={this.menuRef}>
          <Li>
            <NavLink exact to="/" activeclassname="active">
              Home
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/calculator" activeclassname="active">
              Calculator
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/quote" activeclassname="active">
              Quote
            </NavLink>
          </Li>
        </Ul>
      </Nav>
    );
  }
}
