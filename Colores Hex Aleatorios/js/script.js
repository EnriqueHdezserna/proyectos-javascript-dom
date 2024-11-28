const btnChanceColor = document.getElementById('boton-color');
const colorText = document.getElementById('color');

const arrayHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const array = '0123456789ABDEF'
function generadorHexadecimal() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomColor = arrayHex[Math.floor(Math.random() * 16 )];
    color += randomColor;
  }
  return color;
}

btnChanceColor.addEventListener('click', () =>{
    let colorHexadecimal = generadorHexadecimal();
    document.body.style.backgroundColor = colorHexadecimal;
    colorText.textContent = colorHexadecimal;
})



console.log(Math.random() * 16 );


