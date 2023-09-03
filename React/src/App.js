import './App.css';
import Mensaje from './Mensaje.js';

const Descripcion=() =>{
return <p> esta es la app de curso de full staks  bootcamp</p>
}
function App() {
  return (
    <div className="App">

    <Mensaje color='red' message='estamos trabajando '/>
    <Mensaje color='green ' message='en un curso '/>
    <Mensaje color='yellow' message='de React'/>
    <Descripcion/>
      
    </div>
  );
}

export default App;
