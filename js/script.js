
document.querySelectorAll("textarea").forEach((textArea) => {
    const originalText = textArea.value.trim(); // Guardar el texto original

    // Copiar texto al portapapeles al hacer clic
    textArea.addEventListener("click", function () {
        navigator.clipboard.writeText(originalText) // Copiar al portapapeles
            .then(() => {
                // Mostrar SweetAlert
                Swal.fire({
                    title: "¡Copiado!",
                    text: "El texto se ha copiado al portapapeles.",
                    icon: "success",
                    confirmButtonText: "Entendido",
                    confirmButtonColor: "#4CAF50",
                });
            })
            .catch(err => {
                console.error("Error al copiar el texto: ", err);
            });
    });
});