import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

  /** const notes = [
    {
      "userId": 1,
      "id": 1,
      "title": "La muerte es solo una fase de la vida",
      "body": " Alguien que predica sobre justicia no puede ser un buen tipo"
    },
    {
      "userId": 2,
      "id": 2,
      "title": "Si hay voluntada hay un camino",
      "body": " Ningun hombre es derrotado a menos que se inda en su propia mente"
    },
    {
      "userId": 3,
      "id": 3,
      "title": "La confianza no lleva a ningun sitio mas que al camino de la tumba",
      "body": " Solo se puede salvar a quellos que estan preparados para ser salvados  por otros"
    },
  ]; 
  
  ReactDOM.render(<App notes={notes}/>, rootElement);
  
  
  */