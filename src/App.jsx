import { getMonth } from "date-fns";
import { useState } from "react";
import ContainerTable from "../src/components/ContainerTable";
import Footer from "../src/components/Footer";
import FormContainer from "../src/components/FormContainer";
import Nav from "../src/components/Nav";
import SelectMonth from "../src/components/SelectMonth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFeriados } from "./utils/utils";
import { useEffect } from "react";

function App() {
  const [month, setMonth] = useState(getMonth(new Date()));
  const [metodo, setMetodo] = useState("0");
  const [resultados, setResultados] = useState({});
  const [feriados, setFeriados] = useState([]);
  useEffect(() => {
    async function obtenerFeriados() {
      const data = await getFeriados();
      setFeriados(data);
    }
    obtenerFeriados();
  }, []);
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
          feriados={feriados}
        />
        <ContainerTable metodo={metodo} resultados={resultados} />
      </div>
      <Footer />
      <ToastContainer position="bottom-center" autoClose={2000} />
    </>
  );
}

export default App;
