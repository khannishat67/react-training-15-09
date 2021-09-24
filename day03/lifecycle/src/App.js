import { useEffect, useState } from 'react';
import './App.css';
import UseEffect from './UseEffect';

function App() {
  const [cond, setCond] = useState(true)
  const [data, setData] = useState('Something else')
  const [heading, setHeading] = useState('This is a heading')
  const [state, setState] = useState({
    count: 'NIshat',
    someOtherValue: 100
  })
  const action = () => setCond(!cond);
  const action2 = () => setState({
    ...state,
    count: 'NIshat Khan' //!!!WARNING
  });
  const updateP = () => setData('Something else')

  return (
    <div className="App">
    <span>{cond.toString()}</span>
      {
        /*
        <button onClick={updateP}>Update props</button>
      {
        cond &&
        <Lifecycle data={data} />
      }*/
    }
      {
        cond &&
        <UseEffect heading={heading} />
      }
    
    <button onClick={() => action()}>Unmount</button> 
    </div>
  );
}
/* 
  Create API calls
  React router
  React redux
*/
export default App;
