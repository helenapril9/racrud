import React from 'react';
import NoteItem from "./NoteItem";
import './Crud.css';

export default function NotesList (props) {
    const {notes, deleteNote} = props;

    const elements = notes.map(note => <NoteItem key={note.id} note={note} deleteNote={deleteNote}/>)

    return (
        <ul className='notes-list'>
            {elements}
        </ul>
    )

}