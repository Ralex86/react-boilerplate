import React, {Component} from 'react';
import styled from 'react-emotion';
import * as Layout from '../constants/Dimensions.js';

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <HeaderContent>Header content</HeaderContent>
      </HeaderStyled>
    );
  }
}

const HeaderStyled = styled('header')`
  height: ${Layout.header.height}px;
`;

const HeaderContent = styled('nav')`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 3;

  height: ${Layout.header.height}px;

  display: flex;

  background-color: green;
`;

export default Header;
