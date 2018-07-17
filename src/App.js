import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Click from './click.js'
import Clock from './secondCounter.js'
import './App.css';

const MainMenu = () => {return(
  <div>
    <Link to="/home">
      <button>
        Home
      </button>
    </Link>
    <Link to="/counter">
      <button>
        Counter
      </button>
    </Link>
    <Link to="/clock">
      <button>
        Clock
      </button>
    </Link>
  </div>
)}

const Home = () => {return(
  <h1>
    Home
  </h1>
)}

// const About = () => {return(
//   <h1>
//     About
//   </h1>
// )}

// class About extends Component {

  // state = {
  //   count: 0,
  // }

//   constructor(props) {
//   super(props);
//   state = {count: 0};
// }
//
// increaseCount = () => {
//     this.setState({count: this.state.count + 1})
//   }
//
//   render(){
//     return (
//       <h1>About</h1>
//       <button onClick={this.increaseCount}>{count}</button>
//     )
//   }
// }



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Various React Demos</h1>
            <MainMenu />
          </header>
          <div>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/counter" component={Click}/>
            <Route exact path="/clock" component={Clock}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
