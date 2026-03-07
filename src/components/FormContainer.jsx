import { useState } from 'react';
import HourRange from '../components/HourRange';
import TotalHours from '../components/TotalHours';
function FormContainer(props) {
    const { horaEntrada, setHoraEntrada, horaSalida, setHoraSalida, month, setMonth, metodo, setMetodo } = props;
    let seleccion = {
        componente: null,
        metodo: null
    };
    switch (metodo) {

        case "0":
            seleccion.componente = <p className='p-texto-informativo'>Selecciona un método de carga.</p>
            break;
        case "rangoHoras":
            seleccion = {
                componente: <HourRange
                    horaEntrada={horaEntrada}
                    setHoraEntrada={setHoraEntrada}
                    horaSalida={horaSalida}
                    setHoraSalida={setHoraSalida}
                    month={month}
                    setMonth={setMonth}
                />,
                metodo: metodo
            }
            break;
        case "cantidadHoras":
            seleccion = {
                componente: <TotalHours horaEntrada={horaEntrada}
                    setHoraEntrada={setHoraEntrada}
                    horaSalida={horaSalida}
                    setHoraSalida={setHoraSalida}
                    month={month}
                    setMonth={setMonth} />,
                metodo: metodo
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
                        <option value="rangoHoras">Hora de entrada y salida</option>
                        <option value="cantidadHoras">Horas trabajadas</option>
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