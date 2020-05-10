import React, { Component } from 'react';
import { Header, SideMenu, ContentWrapper } from './components';


class App extends Component{
  render(){
    return (
      <div>
        {/* <Router basename={process.env.PUBLIC_URL}> */}
          {/* <Header></Header> */}
          <SideMenu></SideMenu>
          <ContentWrapper></ContentWrapper>
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
