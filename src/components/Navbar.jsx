import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 7px;
    justify-content: space-evenly;
  }  
`;

const H1 = styled.h1`
  margin-left: 30px;
  font-weight: bold;
  font-size: 30px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    font-size: 20px;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  list-style: none;
  transition: 0.5s;
  @media screen and (max-width: 768px) {
    height: 0;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
    &.open {
      height: 162px;
    }
  }
`;

const Li = styled.li`
  padding: 20px;
  font-size: 18px;
  &:not(:last-of-type)::after {
    content: '';
    display: inline;
    border: 1px solid;
    margin-left: 10px
  }
  @media screen and (max-width: 768px) {
    &::after {
      display: none !important;
    }
  }
`;
const A = styled.a`
  margin-right: 10px;
`;

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
            <Link to="/">
              <A>
                Home
              </A>
            </Link>
          </Li>
          <Li>
            <Link to="/calculator">
              <A>
                Calculator
              </A>
            </Link>
          </Li>
          <Li>
            <Link to="/quote">
              <A>
                Quote
              </A>
            </Link>
          </Li>
        </Ul>
      </Nav>
    );
  }
}
