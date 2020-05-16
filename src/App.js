import React, { Component } from 'react';
import { SideMenu, ContentWrapper } from './components';


class App extends Component{
  render(){
    return (
      <div>
          <SideMenu></SideMenu>
          <ContentWrapper></ContentWrapper>
      </div>
    );
  }
}

export default App;
