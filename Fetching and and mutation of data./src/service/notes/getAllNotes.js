import axios from "axios";

export const getAllNotes = () => {
  return axios.get('http://localhost:3001/api/notes')
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
      throw error; // O maneja el error de otra manera aquí
    });
};
