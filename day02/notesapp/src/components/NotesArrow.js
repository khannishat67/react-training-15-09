import React, { useEffect, useState } from 'react'

const something = 'Hello'
const Note = ({ note = "", removeNote = (note) => { }, index }) => {
  return (
    <li>{note} <button onClick={() => removeNote(index)}>X</button></li>
  )
}
const NotesArrow = ({ heading, defaultList=[] }) => {
  const [notes, setNotes] = useState(defaultList)
  const [noteInput, setNoteInput] = useState('')
  useEffect(() => {
    console.log('Notes updated', notes);
  }, [notes])
  const appendNote = () => {
    setNotes([...notes, noteInput])
    setNoteInput('')
  }
  const removeNote = (idx) => {
    setNotes([...notes.slice(0,idx),...notes.slice(idx+1, notes.length)]) // a,b,c ->(b) a,c
  }
  return (
    <React.Fragment>
      <div>{heading}</div>
      <ul>
        {
          // Take each element of array and modify based on given callback, creates a new array
          notes.map((elem, idx) =><Note key={idx} note={elem} index={idx} removeNote={(idx) => removeNote(idx)} />)
        }
      </ul>
      <input type="text" value={noteInput} onChange={(e) => setNoteInput(e.target.value)} />
      <button onClick={appendNote}>Add</button>
    </React.Fragment>
  )
}
export { something };
export default NotesArrow;
// Default Export