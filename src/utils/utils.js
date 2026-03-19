import { parse } from "date-fns";
import { HORAS } from "./constants.js"

export function calcular(e, metodo) {
    e.preventDefault();
    switch (metodo) {
        case "rangoHoras":
            hourRange(e);
            break;
        case "cantidadHoras":
            totalHour(e);
            break;
        default:
            alert("Selecciona un método de carga.")
            return
    }
}

function hourRange(e) {
    const datos = getDatos(e);
    const entradas = formatearDatos(datos.entradas)
    const salidas = formatearDatos(datos.salidas)
    
}

function getDatos(e) {
    const form = new FormData(e.currentTarget)
    const checkBoxes = form.getAll("checkBoxDays")
    const entradas = form.getAll("entrada")
    const salidas = form.getAll("salida")

    return {
        checkBoxes: checkBoxes,
        entradas: entradas,
        salidas: salidas
    }
}

function formatearDatos(datos) {
    let array = []
    let [hora, minuto] = []
    let total;
    datos.forEach(item => {
        if (item == "") {
            total = 0
        } else {
            [hora, minuto] = item.split(":")
            minuto = (minuto / 60).toFixed(2)
            total = Number(hora) + Number(minuto)
        }
        array.push(total)
    })
    debugger
    return array
}



function esDiaNormal(indice) {
    if (arrayHoraEntrada[indice] >= INICIO_DIURNAS && arrayHoraEntrada[indice] < INICIO_NOCTURNAS) {
        if (arrayHoraSalida[indice] <= INICIO_NOCTURNAS) {
            arrayHorasDiurnas[indice] = arrayHoraSalida[indice] - arrayHoraEntrada[indice];
            totalDiurnas += arrayHorasDiurnas[indice];
            arrayHorasNocturnas[indice] = 0;
        } else {
            arrayHorasDiurnas[indice] = INICIO_NOCTURNAS - arrayHoraEntrada[indice];
            arrayHorasNocturnas[indice] = arrayHoraSalida[indice] - INICIO_NOCTURNAS;
            totalDiurnas += arrayHorasDiurnas[indice];
            totalNocturnas += arrayHorasNocturnas[indice];
        }
    } else if ((arrayHoraEntrada[indice] >= INICIO_NOCTURNAS && arrayHoraEntrada[indice] < MEDIA_NOCHE)) {
        arrayHorasNocturnas[indice] = arrayHoraSalida[indice] - arrayHoraEntrada[indice];
        totalNocturnas += arrayHorasNocturnas[indice];

        arrayHorasDiurnas[indice] = 0;
    } else if (arrayHoraEntrada[indice] >= 0 && arrayHoraEntrada[indice] < INICIO_DIURNAS) {
        if (arrayHoraSalida[indice] === MEDIA_NOCHE) {
            arrayHoraSalida[indice] = 0;
        }
        if (arrayHoraSalida[indice] <= INICIO_DIURNAS) {
            arrayHorasNocturnas[indice] = arrayHoraSalida[indice] - arrayHoraEntrada[indice];
            totalNocturnas += arrayHorasNocturnas[indice];
            arrayHorasDiurnas[indice] = 0;
        } else {
            arrayHorasNocturnas[indice] = INICIO_DIURNAS - arrayHoraEntrada[indice];
            arrayHorasDiurnas[indice] = arrayHoraSalida[indice] - INICIO_DIURNAS;
            totalDiurnas += arrayHorasDiurnas[indice];
            totalNocturnas += arrayHorasNocturnas[indice];
        }
    }
}


export function reiniciar() {
    window.location.reload();
}
export function imprimir() {
    alert("imprimiendo...");
}
export function guardar() {
    alert("guardando excel...");
}
export function excel() {
    alert("generando excel...");
}


function validarCampos(entrada, salida) {
    const ids = new Set([...Object.keys(entrada), ...Object.keys(salida)]);
    const valido = Array.from(ids).every((id) => {
        const idEntrada = (entrada[id] ?? "").trim();
        const idSalida = (salida[id] ?? "").trim();
        const enVacio = idEntrada === "";
        const saVacio = idSalida === "";
        return enVacio === saVacio;
    });
    if (!valido) {
        alert("Hay filas incompletas.")
        return false;
    }
    return true
}