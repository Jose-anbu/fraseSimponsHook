import React from "react";

const Frase = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card mb-3 shadow rounded w-75 text-center">
        <div className="row no-gutters">
          <div className="col-md-3 d-flex justify-content-center my-3">
            <img
              src={props.fraseSimpsons.image}
              className="card-img w-50"
              alt={props.fraseSimpsons.character}
            ></img>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="card-body">
              <h5 className="card-title">{props.fraseSimpsons.character}</h5>
              <p className="card-text">{props.fraseSimpsons.quote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frase;
