import React, { Component } from 'react';
import {Fragment} from 'react';
import Header from './Header';
import './Header.css';

class App extends Component{
  render() {
    
    return(
      <Fragment>
        <div className='header'>
          <Header />
        </div>
      
        
        <button id='button'>Add</button>
        <div>
         <span>Name</span>
         <span id='phone'>Phone</span>
        </div>
      
    
      </Fragment>
    );
  }
}

export default App;