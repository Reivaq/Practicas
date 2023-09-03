import axios from "axios";

export const createNotes = ({title, body, userId}={}) => {
    axios.post('http://localhost:3001/api/notes',{title, body, userId})// accion que querramos hacer sobre esta direccion 
    //setNotes((prevNotes) => prevNotes.concat(noteToAddToState));
    
    .then(response=>{
      const {data} =response
      return data
    })

}
