import { format, getDaysInMonth, getYear } from 'date-fns';
import { es } from 'date-fns/locale';
import Headers from '../components/Headers';
import * as utils from '../utils/utils';

function HourRange(props) {
	const { month: monthProp } = props;
	const daysInMonth = getDaysInMonth(new Date());
	const year = getYear(new Date());
	// const month = getMonth(new Date()) + 1;
	const month = monthProp + 1;
	// const MMyy = format(new Date(), 'MM/yyyy')
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
							<input type="checkbox" className="arrayCheckBoxFerDom" id={`checkId${day}`}
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
							<input className="hora-entrada" type="time" name={`horaEntId${day}`} onChange={(e) => {
								utils.getHoraEntrada(day, e.target.value)
							}} />
							{/* <input placeholder="--" type="number" className="inputHE" id={`HE${day}`} title="Hora de 00 a 23" onChange={utils.validarHora} />
							<span>:</span>
							<input placeholder="--" type="number" className="inputME" id={`ME${day}`} title="Minutos de 00 a 59" onChange={utils.validarMinutos} /> */}
						</div>
					</div>
					<div className="container">
						<input className="hora-salida" type="time" name={`horaSalId${day}`} />

						{/* <div className="columnHS">
							<input placeholder="--" type="number" className="inputHS" id={`HS${day}`} title="Hora de 00 a 23" onChange={utils.validarHora} />
							<span>:</span>
							<input placeholder="--" type="number" className="inputMS" id={`MS${day}`} title="Minutos de 00 a 59" onChange={utils.validarMinutos} />
						</div> */}
					</div>
				</div>
			</div>,
		)
	}

	return (
		<>
			<Headers titleA={"Entrada"} titleB={"Salida"} />
			{rows}
		</>
	)
}

export default HourRange;