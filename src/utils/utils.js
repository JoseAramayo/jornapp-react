import { HORAS, JORNAL } from "./constants.js"
import { toast } from "react-toastify";

export function calcular(e, metodo) {
    const notify = () => toast('Wow so easy !');
    e.preventDefault();
    switch (metodo) {
        case "rangoHoras":
            return hourRange(e);
        case "cantidadHoras":
            return totalHour(e);
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

    const acumuladoNormales = {
        totalDiurnas: 0,
        totalNocturnas: 0,
        cobrarDiurnas: 0,
        cobrarNocturnas: 0,
    };
    const acumuladoFerDom = {
        totalDiurnas: 0,
        totalNocturnas: 0,
        cobrarDiurnas: 0,
        cobrarNocturnas: 0,
    };

    for (let index = 0; index < entradas.length; index++) {
        if (salidas[index] == 0) salidas[index] = MEDIA_NOCHE;
        if (salidas[index] < entradas[index]) {
            toast.error("La Hora de Salida es menor a la Entrada")
            return false;
        }

        if (entradas[index] == 0 && salidas[index] == MEDIA_NOCHE) {
            esDiaLibre(entradas, salidas, index);
            continue;
        }

        if (checkBoxs[index].checked) {
            const resultadoFerDom = esFeriadoDomingo(entradas, salidas, index);
            acumuladoFerDom.totalDiurnas += resultadoFerDom.totalDiurnas;
            acumuladoFerDom.totalNocturnas += resultadoFerDom.totalNocturnas;
            acumuladoFerDom.cobrarDiurnas += resultadoFerDom.cobrarDiurnas;
            acumuladoFerDom.cobrarNocturnas += resultadoFerDom.cobrarNocturnas;
        } else {
            const resultadoNormal = esDiaNormal(entradas, salidas, index);
            acumuladoNormales.totalDiurnas += resultadoNormal.totalDiurnas;
            acumuladoNormales.totalNocturnas += resultadoNormal.totalNocturnas;
            acumuladoNormales.cobrarDiurnas += resultadoNormal.cobrarDiurnas;
            acumuladoNormales.cobrarNocturnas += resultadoNormal.cobrarNocturnas;
        }
    }
    return {
        feriaDomingos: acumuladoFerDom,
        diasNormales: acumuladoNormales
    }
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
    const {
        diurno,
        nocturno } = JORNAL
    const { INICIO_DIURNAS, INICIO_NOCTURNAS, MEDIA_NOCHE } = HORAS
    let totalDiurnas = 0;
    let totalNocturnas = 0;

    if (entradas[index] >= INICIO_DIURNAS && entradas[index] < INICIO_NOCTURNAS) {
        if (salidas[index] <= INICIO_NOCTURNAS) {
            totalDiurnas = salidas[index] - entradas[index];
        } else {
            totalDiurnas = INICIO_NOCTURNAS - entradas[index];
            totalNocturnas = salidas[index] - INICIO_NOCTURNAS;
        }
    } else if ((entradas[index] >= INICIO_NOCTURNAS && entradas[index] < MEDIA_NOCHE)) {
        totalNocturnas = salidas[index] - entradas[index];
    } else if (entradas[index] >= 0 && entradas[index] < INICIO_DIURNAS) {
        if (salidas[index] === MEDIA_NOCHE) {
            salidas[index] = 0;
        }
        if (salidas[index] <= INICIO_DIURNAS) {
            totalNocturnas = salidas[index] - entradas[index];
        } else {
            totalNocturnas = INICIO_DIURNAS - entradas[index];
            totalDiurnas = salidas[index] - INICIO_DIURNAS;
        }
    }

    return {
        totalDiurnas: totalDiurnas,
        totalNocturnas: totalNocturnas,
        cobrarDiurnas: diurno * totalDiurnas,
        cobrarNocturnas: nocturno * totalNocturnas
    }
}

function esDiaLibre(entradas, salidas, index) {
    // diasLibres += 1;
    entradas[index] = 0;
    salidas[index] = 0;
}

function esFeriadoDomingo(entradas, salidas, index) {
    const {
        diurnoFerDom,
        nocturnoFerDom } = JORNAL
    const { INICIO_DIURNAS, INICIO_NOCTURNAS, MEDIA_NOCHE } = HORAS
    let totalDiurnas = 0;
    let totalNocturnas = 0;

    if (entradas[index] >= INICIO_DIURNAS && entradas[index] < INICIO_NOCTURNAS) {
        if (salidas[index] <= INICIO_NOCTURNAS) {
            totalDiurnas = salidas[index] - entradas[index];
        } else {
            totalDiurnas = INICIO_NOCTURNAS - entradas[index];
            totalNocturnas = salidas[index] - INICIO_NOCTURNAS;
        }
    } else if ((entradas[index] >= INICIO_NOCTURNAS && entradas[index] < MEDIA_NOCHE)) {
        totalNocturnas = salidas[index] - entradas[index];
    } else if (entradas[index] >= 0 && entradas[index] < INICIO_DIURNAS) {
        if (salidas[index] === MEDIA_NOCHE) {
            salidas[index] = 0;
        }
        if (salidas[index] <= INICIO_DIURNAS) {
            totalNocturnas = salidas[index] - entradas[index];
        } else {
            totalNocturnas = INICIO_DIURNAS - entradas[index];
            totalDiurnas = salidas[index] - INICIO_DIURNAS;
        }
    }

    return {
        totalDiurnas: totalDiurnas,
        totalNocturnas: totalNocturnas,
        cobrarDiurnas: diurnoFerDom * totalDiurnas,
        cobrarNocturnas: nocturnoFerDom * totalNocturnas
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

function formatearMoneda() { }
