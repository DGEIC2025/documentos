const today = new Date();
const currentDay = today.getDate();

// Array con los nombres de los meses
const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];
const currentMonth = meses[today.getMonth()]; // Obtenemos el nombre del mes actual

const year = [
    "2024", "2025", "2026", "2027", "2028", "2029", "2030"
 ];

 const currentYear = today.getFullYear(); 

// Seleccionar automáticamente el día y el mes actuales
document.getElementById('dia').value = currentDay;
document.getElementById('mes').value = currentMonth;
document.getElementById('year').value = currentYear; 

// Función para replicar el valor del mes en formato numérico
function replicarValor() {
    // Obtener el valor del select del mes en texto
    const mes = document.getElementById('mes').value;

    // Definir una relación entre el nombre del mes y su número

    const mesANumero = {
        'enero': 1,
        'febrero': 2,
        'marzo': 3,
        'abril': 4,
        'mayo': 5,
        'junio': 6,
        'julio': 7,
        'agosto': 8,
        'septiembre': 9,
        'octubre': 10,
        'noviembre': 11,
        'diciembre': 12
    }; 

    // Asignar el número correspondiente al segundo select
    const numeromes = document.getElementById('numeromes');
    numeromes.value = mesANumero[mes];
}

// Llamar a replicarValor automáticamente al cargar para establecer el valor numérico del mes actual
replicarValor();