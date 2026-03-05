
function SelectMonth(props) {
    const { month, setMonth } = props;
    return (
        <div className="containerTitle">
            <h1>Calcular horas de </h1>
            <select id="monthSelect" className="month-Select" value={month} onChange={(e) => {
                setMonth(Number(e.target.value))
            }}>
                <option value="0">Enero</option>
                <option value="1">Febrero</option>
                <option value="2">Marzo</option>
                <option value="3">Abril</option>
                <option value="4">Mayo</option>
                <option value="5">Junio</option>
                <option value="6">Julio</option>
                <option value="7">Agosto</option>
                <option value="8">Septiembre</option>
                <option value="9">Octubre</option>
                <option value="10">Noviembre</option>
                <option value="11">Diciembre</option>
            </select>
        </div>
    )
}
export default SelectMonth;