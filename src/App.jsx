import { getMonth } from 'date-fns'
import { useState } from 'react'
import ContainerTable from "../src/components/ContainerTable"
import Footer from '../src/components/Footer'
import FormContainer from "../src/components/FormContainer"
import Nav from '../src/components/Nav'
import SelectMonth from '../src/components/SelectMonth'

function App() {
    const [month, setMonth] = useState(getMonth(new Date()))
    const [horaEntrada, setHoraEntrada] = useState({})
    const [horaSalida, setHoraSalida] = useState({})
    const [metodo, setMetodo] = useState("0")
    return (
        <>
            <Nav />
            <SelectMonth month={month} setMonth={setMonth} />
            <div className="formTableContainer">
                <FormContainer month={month} setMonth={setMonth} horaEntrada={horaEntrada} setHoraEntrada={setHoraEntrada} horaSalida={horaSalida} setHoraSalida={setHoraSalida} metodo={metodo} setMetodo={setMetodo} />
                <ContainerTable horaEntrada={horaEntrada} horaSalida={horaSalida} metodo={metodo} />
            </div>
            <Footer />
        </>
    )
}

export default App;