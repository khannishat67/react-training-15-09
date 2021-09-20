import React from 'react';
import './App.css';
import NotesArrows, { something } from './components/NotesArrow';
import { NotesClass } from './components/NotesClass';
import { add, sub } from './util/Util';
/**
 * Input box + button
 * List
 */

// State & Props
// State is internal to the component
// Props is passed down from the parent component
// Two way binding -> Angular
//


const App = () => {
  return (
    <div className="App">
      <h1>Notes App {add(10, 20)} {sub(20, 30)}</h1>
      <NotesClass data={something} />
      <NotesArrows heading="Notes Arrow Functioon Component" defaultList={['Some', 'Default', 'Value']} />
    </div>
  );
}
// Alt+Shift+F -> Format the file
// Alt+Shift+O -> Optimise imports
export default App;
