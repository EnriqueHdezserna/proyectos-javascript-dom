
const btnCambiarCitas = document.getElementById('boton-cambiar-cita');
const cita = document.getElementById('cita');
const autor = document.getElementById('autor');

function genEnterRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min )
}


genEnterRandom(0, citas.length)


contador = 0;

btnCambiarCitas.addEventListener('click', (e) => {
  contador++;
  if (contador === citas.length) {
    contador = 0;
  }
  autor.textContent = `${citas[contador].autor}`;
  cita.textContent = `"${citas[contador].texto}"`;
});
