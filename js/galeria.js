
// ============================================================================
// Array de objetos con las obras de Casey Reas
// ============================================================================
let obras = [

    {
        nombre: "Tissue B-01",
        año: 2002,
        imagen: "img/tissue-b01.jpg"
    },

    {
        nombre: "SIMULACRUM (A-P-04)",
        año: 2025,
        imagen: "img/simulacrum.jpg"
    },

    {
        nombre: "Stills from there's no distance",
        año: 2023,
        imagen: "img/stills.jpg"
    },

    {
        nombre: "923 EMPTY ROOMS 923",
        año: 2023,
        imagen: "img/emptyrooms.jpg"
    },

    {
        nombre: "DETAILS of A Mathematical Theory of Communication",
        año: 2014,
        imagen: "img/mathematical.jpg"
    }

];
// ==========================
// Div Contenedor galeria 
// ==========================
let galeria = document.getElementById("galeria");
// ==========================
// For que recorre el array para generar la galería
// ==========================
for(let i = 0; i < obras.length; i++){

    let obra = obras[i];

    galeria.innerHTML += `

            <img src="${obra.imagen}" alt="${obra.nombre}">

            <h3>${obra.nombre}</h3>

            <p>Año: ${obra.año}</p>

    `;

}
// ==========================
// Captura del boton
// ==========================
let boton = document.getElementById("cambiarTamanio");


// ==========================
// Se obtienen las imágenes de la galería
// ==========================
let imagenes = galeria.getElementsByTagName("img");


// ==========================
// Booleana que indica si las imágenes están ampliadas
// ==========================

let ampliada = false;


// ==========================
// Evento click sobre el boton
// ==========================
boton.addEventListener("click", cambiarTamanio);



// ==========================
// Función que cambia el tamaño de las imágenes
// ==========================
function cambiarTamanio(){

    if(ampliada == false){

        for(let i = 0; i < imagenes.length; i++){

            imagenes[i].style.width = "100%";

        }

        ampliada = true;
        boton.innerHTML = "Volver al tamaño original";

    }else{

        for(let i = 0; i < imagenes.length; i++){

            imagenes[i].style.width = "32%";

        }

        ampliada = false;
        boton.innerHTML = "Cambiar tamaño de las obras";

    }

}