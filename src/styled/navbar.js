import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #ebe6e6;
  padding: 5px;
  @media screen and (max-width: 768px) {
    padding: 7px;
    justify-content: space-evenly;
  }
`;

export const H1 = styled.h1`
  margin-left: 30px;
  font-weight: bold;
  font-size: 28px;
  color: #664040;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    font-size: 20px;
  }
`;

export const Ul = styled.ul`
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

export const Li = styled.li`
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
