function mostrarFecha() {
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const fechaActual = new Date();

  const diaSemana = diasSemana[fechaActual.getDay()];
  const dia = fechaActual.getDate();
  const mes = fechaActual.toLocaleString("default", { month: "long" });
  const año = fechaActual.getFullYear();
  const hora = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();

  const mensaje = `Hoy es ${diaSemana} ${dia} de ${mes} de ${año}, y son las ${hora} horas, ${minutos} minutos con ${segundos} segundos.`;

  alert(mensaje);
}

function actualizarHora() {
  const horaActual = new Date();
  const hora = horaActual.getHours();
  const minutos = horaActual.getMinutes();
  const segundos = horaActual.getSeconds();

  const horaFormateada = `${hora}:${minutos}:${segundos}`;
  document.getElementById("tiempo").textContent = horaFormateada;
}

// Llamar a la función mostrarFecha() al cargar la página
mostrarFecha();

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);
