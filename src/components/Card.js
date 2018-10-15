import React, {Component} from 'react';
import styled from 'react-emotion';

class Card extends Component {
  render() {
    return <CardStyled>{this.props.children}</CardStyled>;
  }
}

const CardStyled = styled('div')`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
`;

export default Card;
