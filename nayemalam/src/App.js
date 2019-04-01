import React, { Component } from 'react';
import './App.css';
import {Layout, Navigation, Drawer, Content} from 'react-mdl';
// import styled from 'styled-components';
import Wrapper from './components/styled/Wrapper'
// import PageContent from './components/styled/PageContent'
import Router from './components/router'
import logo from './assets/images/na-logo.png';
import {Link} from 'react-router-dom';

class App extends Component {
  
  render() {
    
    return (
      // {/* No header, and the drawer stays open on larger screens (fixed drawer). */}
      <Wrapper>
      <Layout fixedDrawer>
        <Drawer style={{paddingTop: '50px'}} title="">
        
          <img src={logo} width="200" height="200" alt="logo" style={{margin: '0 auto'}}/>
            <Navigation>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/portfolio">PORTFOLIO</Link>
                <Link to="/media">MEDIA</Link>
                <Link to="/speaking">SPEAKING</Link> 
                <Link to="/contact" id="hello">SAY HI!</Link>
            </Navigation>
        </Drawer>
        <Content>
          {/* Router is the Main Page it points to */}
          <Router/>
          {/* <div> 
            <h1> Hello</h1>
            <h2 style={{textAlign: 'right'}}> My Name is Nayem Alam</h2>
          
          </div> */}

        </Content>
      </Layout>
      </Wrapper>
    );
  }
}

export default App;

