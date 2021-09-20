import React from 'react'
// Named export
export class NotesClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: ['Elem 1', 'Elem 2'],
            noteInput: ''
        }
        console.log(this.state);
        console.log(this);
        this.appendNote = this.appendNote.bind(this)
    }
    appendNote() {
        const noteInput = this.state.noteInput
        this.setState({
            notes: [noteInput, ...this.state.notes]
        }, () => {
            console.log('INside callback', this.state.notes);
        });
        console.log('Outside callback', this.state.notes);
    }
    render() {
        return (
            <div>
                <h2>This is done through {this.props.data}</h2>
                <ul>
                    {
                        // Take each element of array and modify based on given callback, creates a new array
                        this.state.notes.map((elem, idx) => <li key={idx}>{elem}</li>)
                    }
                </ul>
                <input type="text" value={this.state.noteInput} onChange={(e) => this.setState({ noteInput: e.target.value })} />
                <button onClick={this.appendNote}>Add</button>
            </div>
        )
    }
}