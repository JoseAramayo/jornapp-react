import { useState } from 'react';
import HourRange from '../components/HourRange';
import TotalHours from '../components/TotalHours';
function FormContainer(props) {
    const { month, setMonth } = props;
    const [metodo, setMetodo] = useState("0");
    let seleccion = {
        componente: null,
        metodo:null
    };
    switch (metodo) {
        
        case "0":
                seleccion.componente =  <p className='p-texto-informativo'>Selecciona un método de carga.</p>
            break;
        case "1":
            seleccion = {
                componente: <HourRange month={month} setMonth={setMonth} />,
                metodo: "1"
            }
            break;
        case "2":
            seleccion = {
                componente: <TotalHours month={month} setMonth={setMonth} />,
                metodo: "2"
            }
            break;

    }

    return (
        <>
            <div className="formContainer">
                <div className="container-select-metodo">
                    <label>Calcular por:</label>
                    <select id="selectMetodo" defaultValue="0" onChange={(e) => {
                        setMetodo(e.target.value)

                    }}>
                        <option value="0" disabled>Seleccionar método</option>
                        <option value="1">Hora de entrada y salida</option>
                        <option value="2">Horas trabajadas</option>
                    </select>
                </div>
                <form>
                    {seleccion.componente}
                </form>
            </div>
        </>
    )
}

export default FormContainer;