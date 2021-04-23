import React from "react";
import { paragraph } from "./store/reducer";


interface NewNotebookProps {
    addNote(note:paragraph):void
}

const NewNoteInput:React.FC<NewNotebookProps> = ({addNote}) => {
    const [note,setNote] = React.useState({id:"",body:"",title:""})
    const updateNote =(event:any)=>{
        setNote({id:"some",body:event.target.value,title:"heys"})
    }
    const onAddNoteClick=()=>{
        console.log(note)
       addNote(note)
   }
  return (
    <div>
      <input onChange={updateNote} type="text" value={note.body} name="note" placeholder="Note" />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};

export default NewNoteInput;
