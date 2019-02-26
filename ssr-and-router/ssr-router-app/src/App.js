import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config' 
import routes from '../shared/routes'

// import './App.css';
import Home from './pages/Home'
import Foo from './pages/Foo'

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
        {/* <button onClick={ this.onClick }>Increment</button>
        <p>{ this.state.count }</p> */}
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/foo">Todos</NavLink>
          </li>
        </ul>
        
        <Switch>
          {/* <Route exact path="/" component={ Home }></Route>
          <Route path="/foo" component={ Foo }></Route> */}
          { renderRoutes( routes ) }
        </Switch>
      </div>
    );
  }
}

export default App;
