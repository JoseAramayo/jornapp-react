import { parse } from "date-fns";
import { JORNAL, HORAS } from "./constants.js"
export function calcular(metodo, entrada, salida, checked) {
    switch (metodo) {
        case "rangoHoras":
            hourRange(entrada, salida, checked);
            break;
        case "cantidadHoras":
            totalHour(entrada, salida, checked);
            break;
        default:
            alert("Selecciona un método de carga.")
    }
}
export function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit...")
    const form = new FormData(e.currentTarget)

    const checkBoxes = form.getAll("checkBoxDays")
    const entradas = form.getAll("entrada")
    const salidas = form.getAll("salida")
    debugger

    console.log("entradas:", entradas)
    console.log("salidas:", salidas)
    console.log("checkBoxes:", checkBoxes)
}

// function hourRange(entrada, salida, checked) {
//     let horaEn = []
//     let minutEn = []
//     let horaSal = []
//     let minutSal = []
//     let entradaFormateada = []
//     let salidaFormateada = []
//     let totalHoras = []

//     const checkBoxArray = Object.entries(checked);
//     const keyCheckBox = Object.keys(checked);

//     const entradaArray = Object.entries(entrada);
//     const keysEntradas = Object.keys(entrada);

//     const salidaArray = Object.entries(salida);
//     const keysSalidas = Object.keys(salida);

//     if (validarCampos(entrada, salida)) {
//         entradaArray.forEach((subArray, index) => {
//             [horaEn[index], minutEn[index]] = subArray[1].split(":")
//             entradaFormateada[index] = Number(horaEn[index]) + Number(minutEn[index] / 60)
//         })
//         salidaArray.forEach((subArray, index) => {
//             [horaSal[index], minutSal[index]] = subArray[1].split(":")
//             salidaFormateada[index] = Number(horaSal[index]) + Number(minutSal[index] / 60)
//         })Export


//     }
//     debugger
//     console.log(entradaFormateada, salidaFormateada)
// }

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
    alert("impoirimr...");
}
export function guardar() {
    alert("guardar...");
}
export function excel() {
    alert("exoprtastr...");
}

export function getHoraEntrada(day, datos) {
    console.log(day, datos)
}
export function getHorasalida(datos) {
    const arraySalidas = []
}
