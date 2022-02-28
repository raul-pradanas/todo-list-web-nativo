const misTareas = [
  new Tarea("Task 1", "Ejemplo", "todo", 23),
  new Tarea("Task 2", "Ejemplo", "todo", 13),
  new Tarea("Task 3", "Ejemplo", "done", 2),
  new Tarea("Task 4", "Ejemplo", "doing", 3),
];

botonAñadirTarea.addEventListener("click", (e) => {
  e.preventDefault();
  /* Implement on click functionality */
  crearTarea();
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

misTareas.forEach((element) => {
  //Recogo los datos de la nueva tarea
  const lTitulo = element.nombre;
  const lDescripcion = element.descripcion;
  const lEstado = element.estado;
  const lPrioridad = element.prioridad;

  misTareas.push(new Tarea(lTitulo,lDescripcion,lEstado,lPrioridad));

  //Clono el div que está oculto
  const tareaClonada = document.getElementById("tareaClonar");
  let template = tareaClonada.cloneNode(true);
  template.removeAttribute("id");
  const lista = document.getElementById("listaGeneral");

  //Establezco los valores recogidos anteriormente
  template.getElementsByClassName("TituloMostrar")[0].innerHTML = lTitulo;
  template.getElementsByClassName("DescripcionMostrar")[0].innerHTML =
    lDescripcion;
  template.getElementsByClassName("EstadoMostrar")[0].innerHTML = lEstado;
  template.getElementsByClassName("PrioridadMostrar")[0].innerHTML =
    lPrioridad;

  lista.appendChild(template);
});
