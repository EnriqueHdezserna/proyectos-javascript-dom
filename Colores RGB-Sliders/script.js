
const contenedorSlider = document.querySelectorAll('#slider-container div');
const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');
const pValue = document.querySelectorAll('#slider-container div p');

const textRed = document.getElementById('text-red');
const textGreen = document.getElementById('text-green');
const textBlue = document.getElementById('text-blue');

let rojo = inputRed.value;
let verde = inputGreen.value;
let azul = inputBlue.value;

//cambiamos textos
textRed.textContent = rojo;
textGreen.textContent = verde;
textBlue.textContent = azul;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo} ${verde} ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

inputRed.addEventListener('change', (e) => {
  rojo = e.target.value;
  console.log(e.target.value);
  textRed.textContent = rojo;
  actualizarColor(rojo, verde, azul)
});

inputGreen.addEventListener('change', (e) => {
  
  
  verde = e.target.value;
  textGreen.textContent = verde;
  actualizarColor(rojo, verde, azul)
});

inputBlue.addEventListener('change', (e) => {
  azul = e.target.value;
  textBlue.textContent = azul;
  actualizarColor(rojo, verde, azul)
});

