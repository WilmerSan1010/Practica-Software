window.onload = function() {
    var formulario = document.getElementById("formularioPerfil");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        var nombre = document.getElementById("nombre").value;
        var profesion = document.getElementById("profesion").value;
        var telefono = document.getElementById("telefono").value;
        var correo = document.getElementById("correo").value;
        var linkedin = document.getElementById("linkedin").value;
        var habilidadesSelect = document.getElementById('habilidades');
        var habilidadesSeleccionadas = [];

        // Recolectar habilidades seleccionadas
        for (var i = 0; i < habilidadesSelect.options.length; i++) {
            var option = habilidadesSelect.options[i];
            if (option.selected) {
                habilidadesSeleccionadas.push(option.value);
            }
        }

        
        if (habilidadesSeleccionadas.length > 3) {
            habilidadesSeleccionadas = habilidadesSeleccionadas.slice(0, 3);
        }

        // Crear contenido para la nueva ventana
        var nuevaVentana = window.open("", "Datos de Postulación", "width=600,height=400");
        nuevaVentana.document.write("<!DOCTYPE html>");
        nuevaVentana.document.write("<html lang='es'>");
        nuevaVentana.document.write("<head>");
        nuevaVentana.document.write("<meta charset='UTF-8'>");
        nuevaVentana.document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        nuevaVentana.document.write("<title>Datos de Postulación</title>");
        nuevaVentana.document.write("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'>");
        nuevaVentana.document.write("</head>");
        nuevaVentana.document.write("<body>");
        nuevaVentana.document.write("<div class='container'>");
        nuevaVentana.document.write("<h1 class='mt-4'>Datos de Postulación</h1>");
        nuevaVentana.document.write("<p><strong>Nombre:</strong> " + nombre + "</p>");
        nuevaVentana.document.write("<p><strong>Profesión:</strong> " + profesion + "</p>");
        nuevaVentana.document.write("<p><strong>Teléfono:</strong> " + telefono + "</p>");
        nuevaVentana.document.write("<p><strong>Correo electrónico:</strong> " + correo + "</p>");
        nuevaVentana.document.write("<p><strong>Perfil de LinkedIn:</strong> " + linkedin + "</p>");

        // Agregar habilidades al contenido de la nueva ventana
        nuevaVentana.document.write("<p><strong>Habilidades:</strong> " + habilidadesSeleccionadas.join(", ") + "</p>");
        nuevaVentana.document.write("</div>");
        nuevaVentana.document.write("</body>");
        nuevaVentana.document.write("</html>");
//prueba de cambios
        nuevaVentana.document.close();
    });
};



