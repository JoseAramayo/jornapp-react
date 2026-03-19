import { useState } from "react";
import HourRange from "../components/HourRange";
import TotalHours from "../components/TotalHours";
import { calcular } from "../utils/utils";
function FormContainer(props) {
  const { month, setMonth, metodo, setMetodo } = props;
  let seleccion = {
    componente: null,
    metodo: null,
  };
  switch (metodo) {
    case "0":
      seleccion.componente = (
        <p className="p-texto-informativo">Selecciona un método de carga.</p>
      );
      break;
    case "rangoHoras":
      seleccion = {
        componente: <HourRange month={month} setMonth={setMonth} />,
        metodo: metodo,
      };
      break;
    case "cantidadHoras":
      seleccion = {
        componente: <TotalHours month={month} setMonth={setMonth} />,
        metodo: metodo,
      };
      break;
  }

  return (
    <>
      <div className="formContainer">
        <div className="container-select-metodo">
          <label>Calcular por:</label>
          <select
            id="selectMetodo"
            defaultValue="0"
            onChange={(e) => {
              setMetodo(e.target.value);
            }}
          >
            <option value="0" disabled>
              Seleccionar método
            </option>
            <option value="rangoHoras">Hora de entrada y salida</option>
            <option value="cantidadHoras">Horas trabajadas</option>
          </select>
        </div>
        <form onSubmit={(e) => calcular(e, metodo)} id="formHoras">{seleccion.componente}</form>
      </div>
    </>
  );
}

export default FormContainer;
