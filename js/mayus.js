function convertirAMayusculas(input) {
   
        // const oficio = document.getElementById('oficio');
        // const inicioSeleccion = oficio.selectionStart;
        // const finSeleccion = oficio.selectionEnd;
        // oficio.value = oficio.value.toUpperCase();
        // oficio.setSelectionRange(inicioSeleccion, finSeleccion);


        // const namer = document.getElementById('namer');
        // namer.value = namer.value.toUpperCase();

        // const cargo = document.getElementById('cargo');
        // cargo.value = cargo.value.toUpperCase();

        // const ci = document.getElementById('ci');
        // ci.value = ci.value.toUpperCase();

        // const namei = document.getElementById('namei');
        // namei.value = namei.value.toUpperCase();

        // const name = document.getElementById('name');
        // name.value = name.value.toUpperCase();

        input.value = input.value.toUpperCase();

    }
    
    function validatePositiveNumber(input) {
        if (input.value < 0) {
            input.value = Math.abs(input.value);
        }
    }
    
