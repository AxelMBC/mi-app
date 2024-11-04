import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Mi sitio Web en React</h1>
        </div>
      </header>

      <main className="App-body">
        <p>Explora este interesante video entre Joe Rogan y Donald Trump: </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=hBMoPUAeLnY&t=6320s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Video en YouTube
        </a>
      </main>

      <footer className="App-footer">
        <p className="title-footer">
          Conceptualización de Servicios en la Nube
        </p>
        <p>Axel Mauricio Barraza Cárdenas</p>
        <p>Código de estudiante: 223984261</p>
        <p>Contacto: barrazaaxel2000@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
