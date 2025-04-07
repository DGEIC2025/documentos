document.querySelectorAll("textarea").forEach((textArea) => {
    const originalText = textArea.value.trim(); // Guardar el texto original

    textArea.addEventListener("click", function () {
        navigator.clipboard.writeText(originalText)
            .then(() => {
                let label = "Texto";
                if (textArea.id === "user") label = "Usuario";
                if (textArea.id === "pass") label = "Contraseña";
                if (textArea.id === "serv") label = "Servidor";
                if (textArea.id === "name") label = "Búsqueda por Nombre";
                if (textArea.id === "ci") label = "Búsqueda por Carpeta";
                if (textArea.id === "dom") label = "Búsqueda de Domicilio";

                // Mostrar SweetAlert con el nombre del dato copiado
                Swal.fire({
                    title: "¡Copiado!",
                    html: ` <u><strong>${label}</strong></u> copiado al portapapeles.`,
                    icon: "success",
                    timer: 6000, // Se cierra después de 6 segundos
                    showConfirmButton: false
                });
            })
            .catch(err => {
                console.error("Error al copiar el texto: ", err);
            });
    });
});
