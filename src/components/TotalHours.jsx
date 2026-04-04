import { format, getDaysInMonth, getYear } from "date-fns";
import { es } from "date-fns/locale";
import Headers from "../components/Headers";

function TotalHours(props) {
  const { month: monthProp, feriados } = props;
  const daysInMonth = getDaysInMonth(new Date());
  const year = getYear(new Date());
  const month = monthProp + 1;
  const rows = [];
  let arrayFeriados = [];
  feriados.forEach((item) => {
    let datos = item.date.split("-");
    arrayFeriados.push(
      `${String(Number(datos[2]))}/${String(Number(datos[1]))}/${datos[0]}`,
    );
  });

  for (let day = 1; day <= daysInMonth; day++) {
    let date = day + "/" + month + "/" + year;
    const dateAux = new Date(year, month - 1, day);
    const dayName = format(dateAux, " EEEE", { locale: es });
    const esDomingo = dayName.toLowerCase().includes("domingo");
    const cobraDoble = () => {
      if (
        dayName.toLowerCase().includes("domingo") ||
        arrayFeriados.some((item) => item === date)
      ) {
        return true;
      }
      return false;
    };
    rows.push(
      <div key={`${month}-${day}`}>
        <div className="divRow">
          <div className="container">
            <div className="columnChkBox">
              <input
                type="checkbox"
                className="checkbox-fer-dom"
                id={`checkBoxId${day}`}
                name="checkBoxDays"
                disabled={esDomingo}
                defaultChecked={cobraDoble()}
              />
            </div>
          </div>
          <div className="container">
            <div className="columnDate">
              <span className="dateWeek" id={`dayId${day}`} name="dayName">
                {dayName}
              </span>
            </div>
          </div>
          <div className="container">
            <div className="columnWeek">
              <span className="date">{date}</span>
            </div>
          </div>
          <div className="container">
            <div className="columnHE">
              <input
                placeholder="--"
                type="number"
                className="inputHE"
                id={`HD${day}`}
                name="entrada"
              />
            </div>
          </div>
          <div className="container">
            <div className="columnHS">
              <input
                placeholder="--"
                type="number"
                className="inputHS"
                id={`HN${day}`}
                name="salida"
              />
            </div>
          </div>
        </div>
      </div>,
    );
  }

  return (
    <>
      <Headers titleA={"Diurnas"} titleB={"Nocturnas"} />
      {rows}
    </>
  );
}

export default TotalHours;
