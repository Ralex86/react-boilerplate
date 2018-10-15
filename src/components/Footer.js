import React, {Component} from 'react';
import styled from 'react-emotion';
import * as Layout from '../constants/Dimensions';

class Footer extends Component {
  render() {
    return (
      <FooterStyled>
        <FooterContent>Footer content</FooterContent>
      </FooterStyled>
    );
  }
}

const FooterStyled = styled('footer')`
  height: ${Layout.header.height}px;
`;

const FooterContent = styled('nav')`
  position: fixed;
  height: ${Layout.footer.height}px;

  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  width: 100%;
  background: green;
`;

export default Footer;
