export function calcular(metodo) {
    if (metodo === "1") {
        // calcularPorEntradaSalida();
    } else if (metodo === "2") {
        // calcularPorHorasTrabajadas();
    } else {
        alert("Primero selecciona un método de carga.");
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
export function Export() {
    alert("exoprtastr...");
}

export function getHoraEntrada(day,datos) {
    console.log(day, datos)
}
export function getHorasalida(datos) {
    const arraySalidas = []
}