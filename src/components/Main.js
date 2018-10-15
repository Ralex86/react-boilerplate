import React, {Component} from 'react';
import styled from 'react-emotion';
import * as Layout from '../constants/Dimensions.js';

class Main extends Component {
  render() {
    return <MainStyled>Main content</MainStyled>;
  }
}

const MainStyled = styled('main')`
  width: 100%;
  height: calc(100% - ${Layout.footer.height + Layout.header.height}px);
  background: red;
`;

export default Main;
