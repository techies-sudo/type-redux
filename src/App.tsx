import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import NewNoteInput from "./NewNotebook";
import { addNotes, NotesState, paragraph } from "./store/reducer";

function App() {
  const notes = useSelector<NotesState,NotesState["notes"]>((state)=>state.notes)
  const dispatch = useDispatch();
  const onAddNote =(note:paragraph)=>{
    dispatch(addNotes(note))
    console.log(notes)
  }
  return (
    <div>
    <NewNoteInput addNote={onAddNote}/>
      <hr />
      <ul>
      {notes.map((note) => {
          return <li key={note.body}>{note.body}</li>;
        })}
      </ul>
      </div>
  );
}

export default App;
