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
    return (
        <>
            <Nav />
            <SelectMonth month={month} setMonth={setMonth} />
            <div className="formTableContainer">
                <FormContainer month={month} setMonth={setMonth} horaEntrada={horaEntrada} horaSalida={horaSalida} setHoraEntrada={setHoraEntrada} setHoraSalida={setHoraSalida} />
                <ContainerTable horaEntrada={horaEntrada} horaSalida={horaSalida} setHoraEntrada={setHoraEntrada} setHoraSalida={setHoraSalida} />
            </div>
            <Footer />
        </>
    )
}

export default App;