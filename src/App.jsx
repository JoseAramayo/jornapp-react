import { getMonth } from "date-fns";
import { useState } from "react";
import ContainerTable from "../src/components/ContainerTable";
import Footer from "../src/components/Footer";
import FormContainer from "../src/components/FormContainer";
import Nav from "../src/components/Nav";
import SelectMonth from "../src/components/SelectMonth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [month, setMonth] = useState(getMonth(new Date()));
  const [metodo, setMetodo] = useState("0");
  const [resultados, setResultados] = useState({});
  const [feriados, setFeriados] = useState([]);

  //TODO:  Pasarle esto como prop a los componentes
  const year = new Date().getFullYear();
  fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/PY`)
    .then((r) => r.json())
    .then((data) => {
      setFeriados(data);
    })
    .catch(() => setFeriados([]));
    debugger
  return (
    <>
      <Nav />
      <SelectMonth month={month} setMonth={setMonth} />
      <div className="formTableContainer">
        <FormContainer
          month={month}
          setMonth={setMonth}
          metodo={metodo}
          setMetodo={setMetodo}
          setResultados={setResultados}
        />
        <ContainerTable metodo={metodo} resultados={resultados} />
      </div>
      <Footer />
      <ToastContainer position="bottom-center" autoClose={2000} />
    </>
  );
}

export default App;
