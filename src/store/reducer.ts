import {ADD_NOTE, REMOVE_NOTE} from './actionTypes'

export interface paragraph{
    id:string,
    body:string,
    title:string
}

export interface NotesState {
    notes: paragraph[];
  }
  
  const initialState = {
    notes: [{id:"some",body:"some",title:"once"}]
  };
  export type Action ={
      type:string,
      payload:any
  }
export function addNotes(note:paragraph){
 const action:Action={type:ADD_NOTE,
    payload:note}
    return action
}

//   export type Action = { type: "ADD_NOTE"; payload: string };
  export const notesReducer = (
    state: NotesState = initialState,
    action: Action
  ) => {
    switch (action.type) {
      case ADD_NOTE: {
        return { ...state, notes: [...state.notes, action.payload] };
      };
      case REMOVE_NOTE:{
          return{
              ...state,
              notes:[...state.notes,"blm"]
          }
      }
      default:
        return state;
    }
  };