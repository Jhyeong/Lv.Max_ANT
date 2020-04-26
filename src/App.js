import React, { Component } from 'react';
import { Header, SideMenu } from './components';
import { ContentContainer } from './containers';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <div>
        <Router>
          <Header></Header>
          <SideMenu></SideMenu>
          <ContentContainer></ContentContainer>
        </Router>
      </div>
    );
  }
}

export default App;
