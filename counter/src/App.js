import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

class App extends Component {

  render() {
    return (
          <div>
              <Counter initialCount={100} color="blue" />
              <Counter initialCount={200} color="red" />
              <Counter initialCount={300} color="green" />
        </div>
   );
  }
}
export default App;
