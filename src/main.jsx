// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa estilos globales
import App from './App';

// Renderiza la aplicación React en el elemento con el id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
