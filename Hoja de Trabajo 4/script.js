const btnPlaya = document.getElementById("btnPlaya");
const btnMontaña = document.getElementById("btnMontaña");
const btnCultural = document.getElementById("btnCultural");

const tablaPlaya = document.getElementById("tablaPlaya");
const tablaMontaña = document.getElementById("tablaMontaña");
const tablaCultural = document.getElementById("tablaCultural");

const imagenesItinerarios = {
  playa: "imagenes/playa.jpg",
  montaña: "imagenes/montaña.jpg",
  cultural: "imagenes/cultural.jpg",
};

const imagenEncabezado = document.getElementById("imagenEncabezado");

function mostrarTabla(tabla) {
  tablaPlaya.style.display = "none";
  tablaMontaña.style.display = "none";
  tablaCultural.style.display = "none";

  tabla.style.display = "table";

  let imagenSrc = "";
  if (tabla === tablaPlaya) imagenSrc = imagenesItinerarios.playa;
  else if (tabla === tablaMontaña) imagenSrc = imagenesItinerarios.montaña;
  else if (tabla === tablaCultural) imagenSrc = imagenesItinerarios.cultural;

  imagenEncabezado.innerHTML = `<img src="${imagenSrc}" alt="Imagen Itinerario" class="img-fluid rounded" style="max-height: 300px;">`;
}

btnPlaya.addEventListener("click", () => mostrarTabla(tablaPlaya));
btnMontaña.addEventListener("click", () => mostrarTabla(tablaMontaña));
btnCultural.addEventListener("click", () => mostrarTabla(tablaCultural));

const comentarios = [
  "Me encantó la experiencia, muy recomendable!",
  "El tour fue muy bien organizado y divertido.",
  "Los guías fueron muy atentos y amables.",
  "Volvería sin duda a repetir esta aventura.",
  "Las vistas y actividades superaron mis expectativas.",
  "Perfecto para relajarse y desconectar.",
  "Un viaje cultural muy enriquecedor.",
  "Muy buen ambiente y excelente comida.",
  "Aprendí mucho y disfruté cada momento.",
  "Gracias por una experiencia inolvidable.",
];

const nombres = [
  "Ana",
  "Luis",
  "Carlos",
  "María",
  "Javier",
  "Sofía",
  "Miguel",
  "Lucía",
  "Pedro",
  "Elena",
];

function mezclarArray(arr) {
  return arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

function mostrarComentarios() {
  const container = document.getElementById("comentarios-container");
  container.innerHTML = "";

  const nombresMezclados = mezclarArray(nombres);
  const comentariosMezclados = mezclarArray(comentarios);

  for (let i = 0; i < 3; i++) {
    const card = document.createElement("div");
    card.classList.add("card", "border-primary", "shadow-sm");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const nombreElem = document.createElement("h5");
    nombreElem.classList.add("card-title");
    nombreElem.textContent = nombresMezclados[i];

    const comentarioElem = document.createElement("p");
    comentarioElem.classList.add("card-text");
    comentarioElem.textContent = comentariosMezclados[i];

    cardBody.appendChild(nombreElem);
    cardBody.appendChild(comentarioElem);
    card.appendChild(cardBody);

    container.appendChild(card);
  }
}

mostrarComentarios();

const form = document.getElementById("contactForm");
const modalEl = document.getElementById("confirmModal");
const modal = new bootstrap.Modal(modalEl);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.classList.remove("is-invalid");
  });

  let valid = true;


  const nombre = document.getElementById("nombre");
  if (!nombre.value.trim()) {
    nombre.classList.add("is-invalid");
    valid = false;
  }

  const fechaNacimiento = document.getElementById("fechaNacimiento");
  if (!fechaNacimiento.value) {
    fechaNacimiento.classList.add("is-invalid");
    valid = false;
  }

  const correo = document.getElementById("correo");
  const correoVal = correo.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoVal || !emailRegex.test(correoVal)) {
    correo.classList.add("is-invalid");
    valid = false;
  }

  const mensaje = document.getElementById("mensaje");
  if (!mensaje.value.trim()) {
    mensaje.classList.add("is-invalid");
    valid = false;
  }

  if (valid) {
  
    modal.show();

   
    console.log("Datos del formulario:");
    console.log("Nombre:", nombre.value);
    console.log("Fecha de nacimiento:", fechaNacimiento.value);
    console.log("Correo:", correo.value);
    console.log("Mensaje:", mensaje.value);

    form.reset();
  }
});
