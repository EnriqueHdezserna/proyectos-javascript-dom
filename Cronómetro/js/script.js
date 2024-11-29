const btnStartPause = document.getElementById('boton-start-pause');
const btnReiniciar = document.getElementById('boton-reiniciar');
const cronometro = document.getElementById('cronometro');

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloTiempo;
let estadoCronometro = 'pausado';
function actualizarCronometro() {
  segundos++;
  if (segundos >= 60) {
    segundos = 0;
    minutos++;
    if (minutos >= 60) {
      minutos = 0;
      horas++;
    }
  }
  let horasFormato = `${horas.toString().padStart(2, '0')}`;
  let minutosFormato = `${minutos.toString().padStart(2, '0')}`;
  let segundosFormato = `${segundos.toString().padStart(2, '0')}`;

  cronometro.textContent = `${horasFormato}:${minutosFormato}:${segundosFormato}`;
}

btnStartPause.addEventListener('click', () => {
  if (estadoCronometro === 'pausado') {
    intervaloTiempo = setInterval(() => {
      actualizarCronometro();
    }, 1000);
    let iconPause = `<i class="bi bi-pause"></i>`;
    document.getElementById('boton-start-pause').innerHTML = iconPause;
    btnStartPause.classList.remove('iniciar');
    btnStartPause.classList.add('pausar');
    estadoCronometro = 'corriendo';
  } else {
    window.clearInterval(intervaloTiempo);
    cambiarPausa()
  }
});

btnReiniciar.addEventListener('click', () => {
  window.clearInterval(intervaloTiempo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  cronometro.textContent = '00:00:00';
  cambiarPausa()
});


function cambiarPausa() {
    let iconPlay = `<i class="bi bi-play" ></i>`;
    document.getElementById('boton-start-pause').innerHTML = iconPlay;
    btnStartPause.classList.remove('pausar');
    btnStartPause.classList.add('iniciar');
    estadoCronometro = 'pausado';
}