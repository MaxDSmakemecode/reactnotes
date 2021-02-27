import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            <div className="formWrapper">
                <input 
                    className="noteInput"
                    placeholder="Write new note..."
                    type="text"
                />
                <button className="noteButton">Add Note</button>
            </div>
        )
    }
}

export default NoteForm