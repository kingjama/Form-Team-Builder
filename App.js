import React from "react"
import {useState} from "react"
import logo from './logo.svg';
import './App.css';
import data from "./data"
import NoteForm from "./NoteForm"
import Notes from "./Notes"

export default function App() {

  const addNewNote = (event) =>{
    let NewInput = [...notes, {...event, id: Date.now()}]
    setFormnote(newInput)
  }
  const [notes, setNotes] = useState(data)
  return (
  
      <div>
        <NoteForm addNewNote={addNewNote} />
        <Notes notes={notes}/>
    </div>
  );
}

