import React, { Component } from 'react';
import { Header, SideMenu, ContentWrapper } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          {/* <Header></Header> */}
          <SideMenu></SideMenu>
          <ContentWrapper></ContentWrapper>
        </Router>
      </div>
    );
  }
}

export default App;
