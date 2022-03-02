const misTareas = [
  new Tarea("Task 1", "Descripción de ejemplo", "todo", 23),
  new Tarea("Task 2", "Descripción de ejemplo", "todo", 13),
  new Tarea("Task 3", "Descripción de ejemplo", "done", 2),
  new Tarea("Task 4", "Descripción de ejemplo", "doing", 3),
];

botonAñadirTarea.addEventListener("click", (e) => {
  e.preventDefault();
  /* Implement on click functionality */
  crearTarea();
  actualizarPagina();
});

function crearTarea() {
  //Recogo los datos de la nueva tarea
  const liTitulo = document.getElementById("tituloTarea").value;
  const liDescripcion = document.getElementById("descripcionTarea").value;
  const liEstado = document.getElementById("estadoNuevaTarea").value;
  const liPrioridad = document.getElementById("prioridadTarea").value;

  //Clono el div que está oculto
  const tareaClonada = document.getElementById("tareaClonar");
  let template = tareaClonada.cloneNode(true);
  template.removeAttribute("id");
  const lista = document.getElementById("listaGeneral");

  //Establezco los valores recogidos anteriormente
  template.getElementsByClassName("TituloMostrar")[0].innerHTML = liTitulo;
  template.getElementsByClassName("DescripcionMostrar")[0].innerHTML =
    liDescripcion;
  template.getElementsByClassName("EstadoMostrar")[0].innerHTML = liEstado;
  template.getElementsByClassName("PrioridadMostrar")[0].innerHTML =
    liPrioridad;

  lista.appendChild(template);

  nuevaTarea = new Tarea(liTitulo, liDescripcion, liEstado, liPrioridad);
  misTareas.push(nuevaTarea);

  if (liEstado === "todo") {
    const lista2 = document.getElementById("listaTodo");
    lista2.appendChild(template);
  } else if (liEstado === "doing") {
    const lista2 = document.getElementById("listaDoing");
    lista2.appendChild(template);
  } else if (liEstado === "done") {
    const lista2 = document.getElementById("listaDone");
    lista2.appendChild(template);
  } else {
    const lista2 = document.getElementById("listaDeleted");
    lista2.appendChild(template);
  }
}

misTareas.forEach((element) => {
  //Recogo los datos de la nueva tarea
  const liTitulo = element.nombre;
  const liDescripcion = element.descripcion;
  const liEstado = element.estado;
  const liPrioridad = element.prioridad;

  //Clono el div que está oculto
  const tareaClonada = document.getElementById("tareaClonar");
  let template = tareaClonada.cloneNode(true);
  template.removeAttribute("id");
  const lista = document.getElementById("listaGeneral");

  //Establezco los valores recogidos anteriormente
  template.getElementsByClassName("TituloMostrar")[0].innerHTML = liTitulo;
  template.getElementsByClassName("DescripcionMostrar")[0].innerHTML =
    liDescripcion;
  template.getElementsByClassName("EstadoMostrar")[0].innerHTML = liEstado;
  template.getElementsByClassName("PrioridadMostrar")[0].innerHTML =
    liPrioridad;

  lista.appendChild(template);

  if (liEstado === "todo") {
    const lista2 = document.getElementById("listaTodo");
    lista2.appendChild(template);
  } else if (liEstado === "doing") {
    const lista2 = document.getElementById("listaDoing");
    lista2.appendChild(template);
  } else if (liEstado === "done") {
    const lista2 = document.getElementById("listaDone");
    lista2.appendChild(template);
  } else {
    const lista2 = document.getElementById("listaDeleted");
    lista2.appendChild(template);
  }
});

function actualizarPagina(){
  const lista = document.getElementById("listaGeneral");
    let child = lista.lastElementChild;

    while (child) {
      lista.removeChild(child);

      child = lista.lastElementChild;
    }

  misTareas.forEach((element) => {
    //Recogo los datos de la nueva tarea
    const lTitulo = element.nombre;
    const lDescripcion = element.descripcion;
    const lEstado = element.estado;
    const lPrioridad = element.prioridad;
  
    //Clono el div que está oculto
    const tareaClonada = document.getElementById("tareaClonar");
    let template = tareaClonada.cloneNode(true);
    template.removeAttribute("id");
    
  
    //Establezco los valores recogidos anteriormente
    template.getElementsByClassName("TituloMostrar")[0].innerHTML = lTitulo;
    template.getElementsByClassName("DescripcionMostrar")[0].innerHTML =
      lDescripcion;
    template.getElementsByClassName("EstadoMostrar")[0].innerHTML = lEstado;
    template.getElementsByClassName("PrioridadMostrar")[0].innerHTML = lPrioridad;
    
    if(lEstado != "removed"){
      lista.appendChild(template);
    }

  });
}

seguro.addEventListener("click", (e) => {
  e.preventDefault();
  /* Implement on click functionality */

  misTareas.forEach((element) => {
    //Recogo los datos de la nueva tarea
    const liTitulo = element.nombre;
    const liDescripcion = element.descripcion;
    const liEstado = element.estado;
    const liPrioridad = element.prioridad;

    //Clono el div que está oculto
    const tareaClonada = document.getElementById("tareaClonar");
    let template = tareaClonada.cloneNode(true);
    let lista = document.getElementById("listaToDo");
    template.removeAttribute("id");

    if(seguro.value==="todo"){
      let lista = document.getElementById("listaToDo");
    }
    else if(seguro.value==="doing"){
      let lista = document.getElementById("listaDoing");
    }
    else if(seguro.value==="done"){
      let lista = document.getElementById("listaDone");
    }
    else if(seguro.value==="deleted"){
      let lista = document.getElementById("listaDeleted");
    }
    

    //Establezco los valores recogidos anteriormente
    template.getElementsByClassName("TituloMostrar")[0].innerHTML = liTitulo;
    template.getElementsByClassName("DescripcionMostrar")[0].innerHTML =
      liDescripcion;
    template.getElementsByClassName("EstadoMostrar")[0].innerHTML = "deleted";
    template.getElementsByClassName("PrioridadMostrar")[0].innerHTML =
      liPrioridad;

    
    if (liEstado === "todo" && seguro.value === "todo") {
      element.estado = "deleted";
      const lista2 = document.getElementById("listaDeleted");
      lista2.appendChild(template);

      const mynode = document.getElementById("listaTodo");
      mynode.innerHTML='';
    } 
    else if (liEstado === "doing" && seguro.value === "doing") {
      element.estado = "deleted";
      const lista2 = document.getElementById("listaDeleted");
      lista2.appendChild(template);

      const mynode = document.getElementById("listaDoing");
      mynode.innerHTML='';
    }
    else if (liEstado === "done" && seguro.value === "done") {
      element.estado = "deleted";
      const lista2 = document.getElementById("listaDeleted");
      lista2.appendChild(template);

      const mynode = document.getElementById("listaDone");
      mynode.innerHTML='';
    }
    else if (liEstado === "deleted" && seguro.value === "deleted") {
      element.estado = "removed";

      const mynode = document.getElementById("listaDeleted");
      mynode.innerHTML='';
    }
    else {
      //console.log("No hay tareas en la lista");
    }

    

    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    actualizarPagina();
  });
});

const modal = document.getElementById("myModal");

const btn = document.getElementById("vaciarTodo");
const btn2 = document.getElementById("vaciarDoing");
const btn3 = document.getElementById("vaciarDone");
const btn4 = document.getElementById("vaciarDeleted");

/* const prio = document.getElementById("prioTodo");
const prio2 = document.getElementById("prioDoing");
const prio3 = document.getElementById("prioDone");
const prio4 = document.getElementById("prioDeleted"); */


btn.onclick = function() {
  modal.style.display = "block";
  seguro.setAttribute("value","todo");
}

btn2.onclick = function() {
  modal.style.display = "block";
  seguro.setAttribute("value","doing");
}

btn3.onclick = function() {
  modal.style.display = "block";
  seguro.setAttribute("value","done");
}

btn4.onclick = function() {
  modal.style.display = "block";
  seguro.setAttribute("value","deleted");
}

/* prio.addEventListener("click", (e) => {
  e.preventDefault();
  // Implement on click functionality 
  ordenarMisTareas(1);
});

prio2.addEventListener("click", (e) => {
  e.preventDefault();
  // Implement on click functionality
  ordenarMisTareas(2);
  
});

prio3.addEventListener("click", (e) => {
  e.preventDefault();
  // Implement on click functionality
  ordenarMisTareas(3);
  
});

prio4.addEventListener("click", (e) => {
  e.preventDefault();
  // Implement on click functionality 
  ordenarMisTareas(4);
  
});*/

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

negacion.addEventListener("click", (e) => {
  e.preventDefault();
  /* Implement on click functionality */
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
});

actualizarPagina();
