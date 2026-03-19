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
    const { MEDIA_NOCHE } = HORAS
    let camposOk = validarCampos(e)
    if (!camposOk) {
        return false
    }
    const datos = getDatos(e);
    const entradas = formatearDatos(datos.entradas)
    const salidas = formatearDatos(datos.salidas)
    const checkBoxs = datos.checkBoxs

    let feriaDomingos
    let diaNormales
    // let diasLibres

    entradas.forEach((item, index) => {
        if (salidas[index] == 0) salidas[index] = MEDIA_NOCHE;
        if (salidas[index] < entradas[index]) {
            toast.error("La Hora de Salida es menor a la Entrada")
            return false;
        } else {
            if (entradas[index] == 0 && salidas[index] == MEDIA_NOCHE) {
                esDiaLibre(entradas, salidas, index);
            } else {
                checkBoxs[index].checked ? feriaDomingos = esFeriadoDomingo(entradas, salidas, index) : diaNormales = esDiaNormal(entradas, salidas, index);
            }
        }
    })
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
    const checkBoxs = document.querySelectorAll('input[name="checkBoxDays"]')
    const entradas = form.getAll("entrada")
    const salidas = form.getAll("salida")
    return {
        checkBoxs: checkBoxs,
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



function esDiaNormal(entradas, salidas, index) {
    const { INICIO_DIURNAS, INICIO_NOCTURNAS, MEDIA_NOCHE } = HORAS
    let horasDiurnas = [];
    let totalDiurnas = [];
    let horasNocturnas = [];
    let totalNocturnas = [];
    if (entradas[index] >= INICIO_DIURNAS && entradas[index] < INICIO_NOCTURNAS) {
        if (salidas[index] <= INICIO_NOCTURNAS) {
            horasDiurnas[index] = salidas[index] - entradas[index];
            totalDiurnas += horasDiurnas[index];
            horasNocturnas[index] = 0;
        } else {
            horasDiurnas[index] = INICIO_NOCTURNAS - entradas[index];
            horasNocturnas[index] = salidas[index] - INICIO_NOCTURNAS;
            totalDiurnas += horasDiurnas[index];
            totalNocturnas += horasNocturnas[index];
        }
    } else if ((entradas[index] >= INICIO_NOCTURNAS && entradas[index] < MEDIA_NOCHE)) {
        horasNocturnas[index] = salidas[index] - entradas[index];
        totalNocturnas += horasNocturnas[index];

        horasDiurnas[index] = 0;
    } else if (entradas[index] >= 0 && entradas[index] < INICIO_DIURNAS) {
        if (salidas[index] === MEDIA_NOCHE) {
            salidas[index] = 0;
        }
        if (salidas[index] <= INICIO_DIURNAS) {
            horasNocturnas[index] = salidas[index] - entradas[index];
            totalNocturnas += horasNocturnas[index];
            horasDiurnas[index] = 0;
        } else {
            horasNocturnas[index] = INICIO_DIURNAS - entradas[index];
            horasDiurnas[index] = salidas[index] - INICIO_DIURNAS;
            totalDiurnas += horasDiurnas[index];
            totalNocturnas += horasNocturnas[index];
        }
    }
    return {
        horasDiurnas: horasDiurnas,
        totalDiurnas: totalDiurnas,
        horasNocturnas: horasNocturnas,
        totalNocturnas: totalNocturnas
    }
}

function esDiaLibre(entradas, salidas, index) {
    // diasLibres += 1;
    entradas[index] = 0;
    salidas[index] = 0;
}

function esFeriadoDomingo(entradas, salidas, index) {
    const { INICIO_DIURNAS, INICIO_NOCTURNAS, MEDIA_NOCHE } = HORAS
    let horasDiurnas = [];
    let totalDFerdom = [];
    let horasNocturnas = [];
    let totalNFerdom = [];

    if (entradas[index] >= INICIO_DIURNAS && entradas[index] < INICIO_NOCTURNAS) {
        if (salidas[index] <= INICIO_NOCTURNAS) {
            horasDiurnas[index] = salidas[index] - entradas[index];
            totalDFerdom += horasDiurnas[index];
            horasNocturnas[index] = 0;
        } else {
            horasDiurnas[index] = INICIO_NOCTURNAS - entradas[index];
            horasNocturnas[index] = salidas[index] - INICIO_NOCTURNAS;
            totalDFerdom += horasDiurnas[index];
            totalNFerdom += horasNocturnas[index];
        }
    } else if ((entradas[index] >= INICIO_NOCTURNAS && entradas[index] < MEDIA_NOCHE)) {
        horasNocturnas[index] = salidas[index] - entradas[index];
        totalNFerdom += horasNocturnas[index];
        horasDiurnas[index] = 0;
    } else if (entradas[index] >= 0 && entradas[index] < INICIO_DIURNAS) {
        if (salidas[index] === MEDIA_NOCHE) {
            salidas[index] = 0;
        }
        if (salidas[index] <= INICIO_DIURNAS) {
            horasNocturnas[index] = salidas[index] - entradas[index];
            totalNFerdom += horasNocturnas[index];
            horasDiurnas[index] = 0;
        } else {
            horasNocturnas[index] = INICIO_DIURNAS - entradas[index];
            horasDiurnas[index] = salidas[index] - INICIO_DIURNAS;
            totalDFerdom += horasDiurnas[index];
            totalNFerdom += horasNocturnas[index];
        }
    }
    return {
        horasDiurnas: horasDiurnas,
        totalDFerdom: totalDFerdom,
        horasNocturnas: horasNocturnas,
        totalNFerdom: totalNFerdom
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