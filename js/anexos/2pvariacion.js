
async function loadTemplate(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load template: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return arrayBuffer;
}
 
async function generateOficio() { 
    // Obtener los valores de todos los campos
    const oficio = document.getElementById('oficio').value.trim();
    const numeromes = document.getElementById('numeromes').value;
    const imputado = document.getElementById('imputado').value.trim();
    const imputadov = document.getElementById('imputadov').value.trim();
    const year = document.getElementById('year').value;
    const variacion = document.getElementById('variacion').value.trim();

    const campos = ['oficio',  'numeromes', 'year', 'imputado','imputadov', 'variacion']
   
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
            html: 'Para generar el documento, es necesario <br> llenar todos los campos del formulario.<br><br>Favor de completar aquellos marcados en rojo.',
            timer: 10000,

            confirmButtonText: 'Aceptar'
        });
        return;
    }

    // Continuar con la generación del documento
    const templateUrl = 'anexos/2pvariacion.docx'; // URL o ruta del archivo de plantilla
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
        numeromes: numeromes,
        year: year,
        imputado: imputado,
       imputadov: imputadov,
        variacion: variacion
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

    const fileName = `Anexo ${oficio || 'sinOficio'}.docx`;

    saveAs(out, fileName);
    
}

