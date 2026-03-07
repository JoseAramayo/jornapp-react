import { format, getDaysInMonth, getYear } from 'date-fns';
import { es } from 'date-fns/locale';
import Headers from '../components/Headers';

function TotalHours(props) {
    const { month: monthProp, setHoraEntrada, setHoraSalida } = props;
    const daysInMonth = getDaysInMonth(new Date());
    const year = getYear(new Date());
    const month = monthProp + 1;
    const rows = []

    for (let day = 1; day <= daysInMonth; day++) {
        let date = day + '/' + month + '/' + year;
        const dateAux = new Date(year, month - 1, day);
        const dayName = format(dateAux, ' EEEE', { locale: es });
        const esDomingo = dayName.toLowerCase().includes('domingo');
        rows.push(
            <div key={`${month}-${day}`}>
                <div className='divRow'>

                    <div className="container">
                        <div className="columnChkBox">
                            <input type="checkbox" className="arrayCheckBoxFerDom" id={`checkBoxId${day}`}
                                disabled={esDomingo}
                                defaultChecked={esDomingo} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="columnDate">
                            <span className="dateWeek" id={`dayId${day}`}>{dayName}</span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="columnWeek">
                            <span className="date">{date}</span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="columnHE">
                            <input placeholder="--" type="number" className="inputHE" id={`HD${day}`} onChange={(e) => {
                                setHoraEntrada(prev => {
                                    return { ...prev, [day]: e.target.value }
                                })
                            }} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="columnHS">
                            <input placeholder="--" type="number" className="inputHS" id={`HN${day}`} onChange={(e) => {
                                setHoraSalida(prev => {
                                    return { ...prev, [day]: e.target.value }
                                })
                            }} />
                        </div>
                    </div>
                </div>
            </div>,
        )
    }

    return (
        <>
            <Headers titleA={"Diurnas"} titleB={"Nocturnas"} />
            {rows}
        </>
    )
}

export default TotalHours;