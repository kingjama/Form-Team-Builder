import { ProxyTypeES5Object } from "immer/dist/internal"
import React from "react"
import {useState} from "react"

const Notes=(props)=> {
    const {notes} = props;
    console.log(props)
    return (

        <div>
{props.notes.map((note)=> (<div> <p> {note.name} </p> <p> {note.email} </p> <p> {note.role}</p>))}
        
        </div>
    )}

    export default Notes; 