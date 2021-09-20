import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
/*
JSX- 
{} -> variables, call functions, conditions, expressions
React Components
*/
// First letter of component should be capital
/* Two types ->
 Stateful Components, -> 15, classes
 Stateless Components -> 16, functions, arrow functions
 this -> Refers to the context (currently referred object)
 a.something -> this.something
 */
class AnotherComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
  }
  render() {
    return (
      <p>Another Component</p>
    )
  }
}
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.decrement}>-1</button>
          {this.state.count}
          <button onClick={this.increment}>+1</button>
        </div>
      </React.Fragment>
    )
  }
}
function HelloWorldComponent() {
  return (
    <h1 style={{
      color: 'red'
    }}>Hello World</h1>
  )
}
function CounterStateless() {
  const [count, setCount] = useState(0)
  const decrement = () => {
    setCount(count - 1)
  }
  const increment = () => {
    setCount(count + 1)
  }
  // Anonymous functions -> No name
  return (
    <React.Fragment>
    
      <AnotherComponent />
      <div>
        <button onClick={() => decrement()}>-1</button>
        {count}
        <button onClick={() => increment()}>+1</button>
      </div>
    </React.Fragment>
  )
}
function App() {
  const condition = true;
  return (
    <React.Fragment>
      <div className="App any number of classes">
        <HelloWorldComponent />
        <CounterStateless />
      </div>
      {
        // In case undefined, null -> false
        condition && <div>
          Sibling
        </div>
      }
    </React.Fragment>
  );
}

export default App;
