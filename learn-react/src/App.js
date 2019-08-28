import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      result: 'TODO'
    }
  }

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      result: e.target.value
    })
  }

  doHI = (e) => {
    this.setState({
      result: 'Hello' + this.name
    })
  }

  render() {
    return (
      <div>
       Hello <input type="text" onKeyUp={this.onChange}/>
       <button onClick={this.doHI}>Hi !!</button>
       <h2>{this.state.result}</h2>
      </div>
    )
  }
}

export default App;
