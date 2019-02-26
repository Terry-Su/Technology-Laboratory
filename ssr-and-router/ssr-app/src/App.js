import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  constructor( props ) {
    super(props)
    this.state = {
      count: 0
    }

    this.onClick = this.onClick.bind( this )
  }

  onClick() {
    this.setState( prevState => ({ count: prevState.count + 1 }) )
  }

  render() {
    return (
      <div className="App">
        <button onClick={ this.onClick }>Increment</button>
        <p>{ this.state.count }</p>
      </div>
    );
  }
}

export default App;
