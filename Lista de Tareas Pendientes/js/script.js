const inputTarea = document.getElementById('ingresar-tarea');
const btnCrearTarea = document.querySelector('.contenedor button');
const contenedorTareas = document.getElementById('lista-de-tareas');
const contenedor = document.querySelector('.contenedor');

function agregarTarea() {
  if (inputTarea.value === '') {
    messageAlert('Por favor ingresa una tarea', 'warning');
  }
  if (inputTarea.value) {
    let tareaContainer = document.createElement('div');
    tareaContainer.classList.add('tarea');

    let textoTarea = document.createElement('p');
    textoTarea.innerText = inputTarea.value;
    tareaContainer.appendChild(textoTarea);
    //iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaContainer.appendChild(iconos);
    let iconCompletar = document.createElement('i');
    iconCompletar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    iconCompletar.addEventListener('click', completarTarea);

    let iconBorrar = document.createElement('i');
    iconBorrar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    iconos.append(iconCompletar, iconBorrar);
    iconBorrar.addEventListener('click', eliminarTarea);
    contenedorTareas.appendChild(tareaContainer);
    messageAlert('Tarea agregada exitosamente', 'add');
  }
}

function messageAlert(message, tipo) {
  if (tipo === 'add') {
    let p = document.createElement('p');
    p.classList.add('message', 'message-add');
    p.innerText = message;
    console.log(contenedor);
    contenedor.prepend(p);
    setTimeout(() => {
      p.remove();
    }, 2000);
  } else if (tipo === 'delete') {
    let p = document.createElement('p');
    p.classList.add('message', 'message-delete');
    p.innerText = message;
    console.log(contenedor);
    contenedor.prepend(p);
    setTimeout(() => {
      p.remove();
    }, 2000);
  } else if (tipo === 'warning') {
    let p = document.createElement('p');
    p.classList.add('message', 'message-warning');
    p.innerText = message;
    console.log(contenedor);
    contenedor.prepend(p);
    setTimeout(() => {
      p.remove();
    }, 2000);
  } else if (tipo === 'complete') {
    let p = document.createElement('p');
    p.classList.add('message', 'message-complete');
    p.innerText = message;
    console.log(contenedor);
    contenedor.prepend(p);
    setTimeout(() => {
      p.remove();
    }, 2000);
  } else {
    console.log('tipo de mensaje no válido');
  }
}

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada');
  messageAlert('Tarea completada exitosamente', 'complete');
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
  messageAlert('Tarea eliminada exitosamente', 'delete');
}
btnCrearTarea.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      agregarTarea();
    }
  
});
