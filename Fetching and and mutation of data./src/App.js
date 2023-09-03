import "./styles.css";
import { Note } from './Note';
import React, { useEffect, useState } from "react"; // Importa React también
import { getAllNotes } from "./service/notes/getAllNotes";
import { createNotes } from "./service/createNotes";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllNotes().then(notes => {
      setNotes(notes);
      setLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    createNotes(noteToAddToState).then(newNote => {
      setNotes((prevNotes) => prevNotes.concat(newNote));
      setNewNote(""); // Limpia el campo de entrada después de agregar la nota
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "Cargando ..." : ""}
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
    </div>
  );
}


 // Con el timeout primero se renderiza sin las notas 
  /** Primero se renderiza sin ejecutar nada del useeffect
   * Una vez renderizada ejecuta el efecto por que los efectos son cuando a ocurrido el renderizada
   * hasta que pasan dos segundos esto sucede de forma total mente asincrona 
   */


  /**CON FETCH
   * 
   *  useEffect(() => {
    console.log('useEffect')
    setLoading(true)
    setTimeout(() =>{
      console.log('Ahora!!')
      console.log("useEffect");
      fetch('https://jsonplaceholder.typicode.com/posts')  // Cambio de URL aquí
        .then((response) => response.json())
        .then((json) => {
          console.log("Setenado las notas de las API");
          setNotes(json);
          setLoading(false)
        });

    }, 2000)
   
  }, [newNote]); //Cada vez que cambie algo renderizate Cunado teclemos en agragar nueva nota  el useEffect se vuelvea actualizar 
  //pOR QUE DEPENDE DEL VALOR DE NEWnOTE Y SI EL VALOR DE NEWnOTE cAMBIA ESTE VULVE A EJECUTARSE
  //En pocas palabra el fecto depende de de la dependencia NewNote y cada vez que cmbie esa dependencia ejecutas UseEffect
  
   */