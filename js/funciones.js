// Función para validar el formulario de contacto
function validarFormulario() {
  const nombre = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('message').value;

  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, completa todos los campos.');
    return false; // Detener el envío del formulario
  } else {
    // Llama a la función para mostrar los datos en una alerta
    mostrarDatosEnAlerta(nombre, email, mensaje);
    return true; // Permite el envío del formulario
  }
}

// Función para mostrar los datos en una alerta
function mostrarDatosEnAlerta(nombre, email, mensaje) {
  const datos = `Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`;
  alert(datos);
}
