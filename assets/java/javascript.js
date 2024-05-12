    function calcularIMC() {
        var peso = parseFloat(document.getElementById("peso").value);
        var altura = parseFloat(document.getElementById("altura").value);
        var resultadoIMC = peso / (altura * altura);
        mostrarResultado("El IMC es: " + resultadoIMC.toFixed(2));
    }

    function calcularEdad() {
        var edadHumana = parseInt(document.getElementById("edad").value);
        var edadMascota = calcularEdadMascota(edadHumana);
        mostrarResultado("La edad de la mascota es aproximadamente: " + edadMascota + " años");
    }

    function calcularEdadMascota(edadHumana) {
        if (edadHumana <= 1) {
            return 15;
        } else if (edadHumana == 2) {
            return 24;
        } else {
            return 24 + (edadHumana - 2) * 4;
        }
    }

    function mostrarResultado(mensaje) {
        document.getElementById("resultado").innerHTML = "<p>" + mensaje + "</p>";
    }