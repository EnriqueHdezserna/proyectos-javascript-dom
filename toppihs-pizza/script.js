const contenedor = document.getElementById('contenedor');
const titulo = document.getElementById('titulo');
const lista = document.querySelector('#contenedor ul');

lista.addEventListener('click', (e) => {
  
    console.log(e.target.innerText);
  
});
