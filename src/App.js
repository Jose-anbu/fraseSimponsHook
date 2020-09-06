import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";

function App() {
  const [fraseSimpsons, setFraseSimpsons] = useState({});
  const [loader, setLoader] = useState(false);

  const consultarAPI = async () => {
    setLoader(true);
    // fetch: se coloca la dirección de donde voy a traer los datos. Se conecta a un servidor
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes"); // GET: en una operación GET no hace falta poner el 2do parámetro, pero para subir, modificar o eliminar se elimina un 2do parámetro
    const respuesta = await api.json(); // para acceder al objeto json y guardarla en respuesta
    console.log(api);
    console.log(respuesta[0]);
    setTimeout(() => { // setTimeout: lo usamos para generar un tiempo que nos permita visualizar el funcionamiento del spinner, solo para verlo en la práctica pero no hay que ponerlo en un proyecto con una consulta a DB real.
      setFraseSimpsons(respuesta[0]);
      setLoader(false);
    }, 2000);
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  const cargarComponente = loader ? (
    <Spinner></Spinner>
  ) : (
    <Frase fraseSimpsons={fraseSimpsons}></Frase>
  );

  return (
    <section className="container my-5">
      <article className="d-flex flex-column align-items-center">
        <img
          src={process.env.PUBLIC_URL + "logoSimpsons.png"}
          alt="logo de los Simpsons"
          className="w-75 mb-4"
        />
        <button
          className="btn btn-warning my-4 w-50 shadow"
          onClick={() => {
            consultarAPI();
          }}
        >
          Obtener frase
        </button>
      </article>
      {cargarComponente}
    </section>
  );
}

export default App;

// 12/08 - 0.47
