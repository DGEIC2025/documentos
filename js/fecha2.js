
        document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    
    // Obtener el día actual con dos dígitos
    const currentDay = String(today.getDate()).padStart(2, '0');
    
    // Arrays con los nombres y los números de los meses
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    
    const currentMonthName = meses[today.getMonth()]; // Nombre del mes en español
    const currentMonthNumber = String(today.getMonth() + 1).padStart(2, '0'); // Mes en formato 01, 02, ...

    const currentYear = today.getFullYear(); // Obtener el año actual

    // Asignar valores a los campos correspondientes
    document.getElementById('dia').value = currentDay;
    document.getElementById('mes').value = currentMonthName;
    document.getElementById('year').value = currentYear;
    document.getElementById('numeromes').value = currentMonthNumber; // Ahora también en numeromes


    // Llamar a la función para actualizar el número del mes
    replicarValor();
});
