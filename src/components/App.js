import React, {Component} from 'react';
import styled from 'react-emotion';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <AppStyled>
        <Header />
        <Main />
        <Footer />
      </AppStyled>
    );
  }
}

const AppStyled = styled('section')`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export default App;
