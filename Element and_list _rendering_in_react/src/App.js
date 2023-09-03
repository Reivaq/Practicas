import React, { useState } from 'react';
import './styles.css';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([
    {
      "id": 1,
      "content": "HTML is easy",
      "date": "2019-05-30T17:30:31.098Z",
      "important": true
    },
    {
      "id": 2,
      "content": "Browser can execute only JavaScript",
      "date": "2019-05-30T18:39:34.091Z",
      "important": false
    },
    {
      "id": 3,
      "content": "GET and POST are the most important methods of HTTP protocol",
      "date": "2019-05-30T19:20:14.298Z",
      "important": true
    },
  ]);

  const [newNote, setNewNote] = useState('');

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleClick = () => {
    console.log('crear nota');
    console.log(newNote);

    const newNoteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: false,
    };

    setNotes([...notes, newNoteObject]);
    setNewNote('');
  };

  return (
    <div>
      <h1>Notas</h1>
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <div>
        <input type='text' onChange={handleChange} value={newNote} />
        <button onClick={handleClick}>Crear Nota</button>
      </div>
    </div>
  );
}

export default App;
