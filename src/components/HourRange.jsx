import { format, getDaysInMonth, getYear } from "date-fns";
import { es } from "date-fns/locale";
import { useEffect } from "react";
import Headers from "../components/Headers";

function HourRange(props) {
  const {
    month: monthProp,
    setHoraEntrada,
    setHoraSalida,
    setChecked,
    checked,
  } = props;
  const daysInMonth = getDaysInMonth(new Date());
  const year = getYear(new Date());
  const month = monthProp + 1;
  const rows = [];

  useEffect(() => {
    const domiFeri = {};
    for (let day = 1; day <= daysInMonth; day++) {
      const dateAux = new Date(year, month - 1, day);
      const dayName = format(dateAux, " EEEE", { locale: es });
      if (dayName.toLowerCase().includes("domingo")) {
        domiFeri[day] = true;
      }
    }
    setChecked((prev) => ({ ...domiFeri, ...prev }));
  }, [monthProp]);

  for (let day = 1; day <= daysInMonth; day++) {
    let date = day + "/" + month + "/" + year;
    const dateAux = new Date(year, month - 1, day);
    const dayName = format(dateAux, " EEEE", { locale: es });
    const esDomingo = dayName.toLowerCase().includes("domingo");
    rows.push(
      <div key={`${month}-${day}`}>
        <div className="divRow">
          <div className="container">
            <div className="columnChkBox">
              <input
                type="checkbox"
                className="arrayCheckBoxFerDom"
                id={`checkId${day}`}
                disabled={esDomingo}
                checked={checked?.[day] ?? esDomingo}
                onChange={(e) => {
                  setChecked((prev) => {
                    return { ...prev, [day]: e.target.checked };
                  });
                }}
              />
            </div>
          </div>
          <div className="container">
            <div className="columnDate">
              <span className="dateWeek" id={`dayId${day}`}>
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
                className="hora-entrada"
                type="time"
                name={`horaEntId${day}`}
                onChange={(e) => {
                  setHoraEntrada((prev) => {
                    return { ...prev, [day]: e.target.value };
                  });
                }}
              />
            </div>
          </div>
          <div className="container">
            <input
              className="hora-salida"
              type="time"
              name={`horaSalId${day}`}
              onChange={(e) => {
                setHoraSalida((prev) => {
                  return { ...prev, [day]: e.target.value };
                });
              }}
            />
          </div>
        </div>
      </div>,
    );
  }

  return (
    <>
      <Headers titleA={"Entrada"} titleB={"Salida"} />
      {rows}
    </>
  );
}

export default HourRange;
