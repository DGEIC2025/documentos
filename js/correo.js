function generarCorreo(event) {
    event.preventDefault();

    // Recoger los valores de los campos del formulario
    const oficio = document.getElementById('oficio').value.trim();
    const remitente = document.getElementById('remitente').value.trim();
    const cargo = document.getElementById('cargo').value.trim();
    const carpeta = document.getElementById('carpeta').value.trim();
    const year = document.getElementById('year').value.trim();
    const numeromes = document.getElementById('numeromes').value.trim();


    // Plantilla de correo
    const plantilla = `
        <html>
        <head>
            <style>
                body { font-family: Sans-Serif; font-size: 13px;}
                .container { padding: 50px; background-color: #f9f9f9; border: 1px solid #ddd;
                 max-width: 700px; margin: auto; }
                .header { background-color: #ffffff; color: black; text-align: center; padding: 10px; }
                .content { padding: 20px; background-color: #fff;  }
                .footer { text-align: center; color: #888; padding-top: 10px; font-size: 12px; }
                .acuse{ font-size: 24px; color: #FF0000; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>RESPUESTA AL ${remitente} relacionado a su CARPETA ${carpeta}</h1>
                </div>
                <div class="content">

<p><strong>${remitente}</strong></p>
 <p><strong>${cargo}</strong></p>

 <p> Por instrucción de la C.P. Ana Luisa Barrera Toledo, Directora General de Estadística e Información Criminógena, 
 por este medio envío oficio de contestación FGE/AIC/DGEIC/${oficio}/${year}-${numeromes}
 referente a la petición de búsqueda, remitida a esta Dirección General  relacionado 
 a su CARPETA ${carpeta} </p>
<p> Sin otro particular por el momento, reciba un cordial saludo.    </p>
<p class="acuse"> Favor de acusar de recibido.</p>

                </div>
               
            </div>
        </body>
        </html>
    `;

    // Abrir nueva ventana con el contenido generado
    const nuevaVentana = window.open();
    nuevaVentana.document.write(plantilla);
    nuevaVentana.document.close();
}