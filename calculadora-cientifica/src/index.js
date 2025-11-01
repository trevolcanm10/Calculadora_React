import React from 'react';//Importa la libreria para arrancar el proyecto
import ReactDOM from 'react-dom/client';//Conexion de React con el navegador
import App from './App';//Importamos el componente principal

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
