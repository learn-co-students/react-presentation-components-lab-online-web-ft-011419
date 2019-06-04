import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  state = {favoriteColor: "White"}
  simplerClickHandler = () => {
    this.setState({favoriteColor: "Orange"})
  }
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.simplerClickHandler} />
  </div>,
  document.getElementById('root')
);
