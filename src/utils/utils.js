import { parse } from "date-fns";
import { HORAS } from "./constants.js"
import { toast } from "react-toastify";


export function calcular(e, metodo) {
    const notify = () => toast('Wow so easy !');
    e.preventDefault();
    switch (metodo) {
        case "rangoHoras":
            hourRange(e);
            break;
        case "cantidadHoras":
            totalHour(e);
            break;
        default:
            toast.info("Seleccione un método");
            break
    }
}

function hourRange(e) {
    let camposOk = validarCampos(e)
    debugger
    if (!camposOk) {
        return false
    }
    const datos = getDatos(e);
    const entradas = formatearDatos(datos.entradas)
    const salidas = formatearDatos(datos.salidas)
}

function validarCampos(e) {
    const form = new FormData(e.currentTarget)
    const entradas = form.getAll("entrada")
    const salidas = form.getAll("salida")
    for (let index = 0; index < entradas.length; index++) {
        if ((entradas[index] != "" && salidas[index] == "") || (entradas[index] == "" && salidas[index] != "")) {
            toast.warning("Hay filas incompletas");
            return false
        }
    }
    return true
}

function getDatos(e) {
    const form = new FormData(e.currentTarget)
    const checkBoxes = document.querySelectorAll('input[name="checkBoxDays"]')
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
    return array
}



function esDiaNormal(indice) {
    if (entradas[indice] >= INICIO_DIURNAS && entradas[indice] < INICIO_NOCTURNAS) {
        if (salidas[indice] <= INICIO_NOCTURNAS) {
            horasDiurnas[indice] = salidas[indice] - entradas[indice];
            totalDiurnas += horasDiurnas[indice];
            horasNocturnas[indice] = 0;
        } else {
            horasDiurnas[indice] = INICIO_NOCTURNAS - entradas[indice];
            horasNocturnas[indice] = salidas[indice] - INICIO_NOCTURNAS;
            totalDiurnas += horasDiurnas[indice];
            totalNocturnas += horasNocturnas[indice];
        }
    } else if ((entradas[indice] >= INICIO_NOCTURNAS && entradas[indice] < MEDIA_NOCHE)) {
        horasNocturnas[indice] = salidas[indice] - entradas[indice];
        totalNocturnas += horasNocturnas[indice];

        horasDiurnas[indice] = 0;
    } else if (entradas[indice] >= 0 && entradas[indice] < INICIO_DIURNAS) {
        if (salidas[indice] === MEDIA_NOCHE) {
            salidas[indice] = 0;
        }
        if (salidas[indice] <= INICIO_DIURNAS) {
            horasNocturnas[indice] = salidas[indice] - entradas[indice];
            totalNocturnas += horasNocturnas[indice];
            horasDiurnas[indice] = 0;
        } else {
            horasNocturnas[indice] = INICIO_DIURNAS - entradas[indice];
            horasDiurnas[indice] = salidas[indice] - INICIO_DIURNAS;
            totalDiurnas += horasDiurnas[indice];
            totalNocturnas += horasNocturnas[indice];
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


// function validarCampos(entrada, salida) {
//     const ids = new Set([...Object.keys(entrada), ...Object.keys(salida)]);
//     const valido = Array.from(ids).every((id) => {
//         const idEntrada = (entrada[id] ?? "").trim();
//         const idSalida = (salida[id] ?? "").trim();
//         const enVacio = idEntrada === "";
//         const saVacio = idSalida === "";
//         return enVacio === saVacio;
//     });
//     if (!valido) {
//         alert("Hay filas incompletas.")
//         return false;
//     }
//     return true
// }