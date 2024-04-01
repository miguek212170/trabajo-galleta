import './App.css';
import frases from "./utils/frases.json"
import React, {useState} from 'react';

function App() {
  const [fraseActual, setFraseActual] = useState({});

  const obtenerFraseAleatoria = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setFraseActual(frases[randomIndex]);
  };

  const [imagen, setImagen] = useState(null); // Estado para la imagen de fondo

  const obtenerImagenAleatoria = () => {
  
  };

  const ejecutarAmbasFunciones = () => {
    obtenerImagenAleatoria(); // Llamar a la primera función
    obtenerFraseAleatoria(); // Llamar a la segunda función
  };

  return (
  <>
     <div className="contenedor">
      <div className="contenido">
        <h1 className='title'>GALLETAS DE LA FORTUNA</h1>
        <button  className='boton' onClick={ejecutarAmbasFunciones}>Obtener Fortuna</button>
        <div className="frase-imagen">
            <p className='frase'>{fraseActual.phrase}</p>
            <img src="../src/assets/rectangle2.svg" />
          </div>
        
        
      </div>
      <p className='autor'>Fuente: {fraseActual.author}</p>
    </div>
  </>  
  )
}

export default App
