
export function calcular(metodo, entrada, salida) {
    debugger

    switch (metodo) {
        case "rangoHoras":
            hourRange(entrada, salida);
            break;
        case "cantidadHoras":
            totalHour(entrada, salida);
            break;
        default:
            alert("Selecciona un método de carga.")
    }
}
function hourRange(entrada, salida) {
}
function totalHour(entrada, salida) { }

export function reiniciar() {
    window.location.reload();
}
export function imprimir() {
    alert("impoirimr...");
}
export function guardar() {
    alert("guardar...");
}
export function Export() {
    alert("exoprtastr...");
}

export function getHoraEntrada(day, datos) {
    console.log(day, datos)
}
export function getHorasalida(datos) {
    const arraySalidas = []
}