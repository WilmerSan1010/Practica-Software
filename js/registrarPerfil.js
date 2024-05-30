let habilidadesSeleccionadas = [];

document.getElementById('btnAddHabilidad').addEventListener('click', function() {
    const habilidadesSelect = document.getElementById('habilidades');
    const habilidades = [];

    for (let i = 0; i < habilidadesSelect.options.length; i++) {
        const option = habilidadesSelect.options[i];
        if (option.selected) {
            habilidades.push(option.value);
        }
    }

    if (habilidadesSeleccionadas.length < 3 && habilidades.length > 0) {
        habilidadesSeleccionadas.push(habilidades[0]);
    }
});

// Guardar el perfil
document.getElementById('formularioPerfil').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    const nombre = document.getElementById('nombre').value;
    const imagen = document.getElementById('imagen').value;
    const profesion = document.getElementById('profesion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const linkedin = document.getElementById('linkedin').value;

    const data = {
        nombre: nombre,
        imagen: imagen,
        profesion: profesion,
        telefono: telefono,
        correo: correo,
        linkedin: linkedin,
        habilidad1: habilidadesSeleccionadas[0] || '',
        habilidad2: habilidadesSeleccionadas[1] || '',
        habilidad3: habilidadesSeleccionadas[2] || ''
    };

    fetch('http://localhost:5000/registrarPerfil', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        alert(data);
        console.log('Success:', data);
    })
    .catch((error) => {
        alert('Hubo un error al registrar el perfil');
        console.error('Error:', error);
    });
});
