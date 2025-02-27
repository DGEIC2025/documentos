
async function loadTemplate(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load template: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return arrayBuffer;
}
 
async function generateDocument() {
    // Obtener los valores de todos los campos
    const oficio = document.getElementById('oficio').value.trim();
    const remitente = document.getElementById('remitente').value.trim();
    const cargo = document.getElementById('cargo').value.trim();
    const diao = document.getElementById('diao').value;
    const meso = document.getElementById('meso').value;
    const dia = document.getElementById('dia').value;
    const numeromes = document.getElementById('numeromes').value;
    const mes = document.getElementById('mes').value;
    const year = document.getElementById('year').value;
    const carpeta = document.getElementById('carpeta').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const imputadop = document.getElementById('imputadop').value.trim();
    const variacion = document.getElementById('variacion').value.trim();
    const imputadon = document.getElementById('imputadon').value.trim();

    const campos = ['oficio', 'remitente', 'cargo', 'diao' , 'meso' ,'dia' , 'year','numeromes', 'mes' , 'carpeta' , 'imputadop' ,'variacion', 'imputadon', 'nombre']


    // Verificar y resaltar campos vacíos
    let algunCampoVacio = false;

    // Iterar sobre los campos y verificar si están vacíos
    campos.forEach(campoId => {
        const campo = document.getElementById(campoId);
        if (!campo.value.trim()) {
            campo.classList.add('campo-vacio'); // Agregar clase campo-vacio si el campo está vacío
            algunCampoVacio = true;
        } else {
            campo.classList.remove('campo-vacio'); // Quitar clase campo-vacio si el campo está lleno
        }
    });

    if (algunCampoVacio) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Para generar el documento, es necesario llenar todos los campos del formulario. Favor de completar aquellos marcados en rojo.',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    

    // Continuar con la generación del documento
    const templateUrl = 'documentos/2p1positivav.docx'; // URL o ruta del archivo de plantilla
    let arrayBuffer;

    try {
        arrayBuffer = await loadTemplate(templateUrl);
    } catch (error) {
        console.error(error);
        alert('Error al cargar la plantilla: ' + error.message);
        return;
    }

    const zip = new PizZip(arrayBuffer);
    const doc = new window.docxtemplater().loadZip(zip);

    doc.setData({
        oficio: oficio,
        remitente: remitente,
        cargo: cargo,
        diao: diao,
        meso: meso,
        dia: dia,
        numeromes: numeromes,
        mes: mes,
        year: year,
        carpeta: carpeta,
        imputadon: imputadon,
        variacion: variacion,
        imputadop: imputadop,
        nombre: nombre
    });

    try {
        doc.render();
    } catch (error) {
        const e = {
            stack: error.stack,
            properties: error.properties,
        };
        console.error(JSON.stringify({ error: e }, null, 2));
        alert('Error al generar el documento: ' + error.message);
        return;
    }

    const out = doc.getZip().generate({
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    const fileName = `Documento_${oficio || 'sinOficio'}.docx`;

    saveAs(out, fileName);
    
}
