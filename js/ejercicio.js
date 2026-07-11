// ===================================
// Array de instalaciones\
// ===================================\
let instalaciones = [];

// ===================================
// Variables generales
// ===================================
let cantidadInstalaciones;
let horasDia;
let valorHora;

// ===================================
// Contador
// ===================================
let contador = 0;

// ===================================
// Captura de elementos
// ===================================
let txtCantidadInstalaciones = document.getElementById("cantidadInstalaciones");
let txtHorasDia = document.getElementById("horasDia");
let txtValorHora = document.getElementById("valorHora");

let txtNombreInstalacion = document.getElementById("nombreInstalacion");
let txtCantidadPersonas = document.getElementById("cantidadPersonas");
let txtCantidadDias = document.getElementById("cantidadDias");

let btnComenzar = document.getElementById("btnComenzar");
let btnAgregar = document.getElementById("btnAgregar");
let btnCalcular = document.getElementById("btnCalcular");
let btnReiniciar = document.getElementById("btnReiniciar");

let resultado1 = document.getElementById("resultado1");
let resultado2 = document.getElementById("resultado2");
let resultado3 = document.getElementById("resultado3");

// ===================================
// Eventos
// ===================================
btnComenzar.addEventListener("click", comenzarCarga);
btnAgregar.addEventListener("click", agregarInstalacion);
btnCalcular.addEventListener("click", calcularResultados);
btnReiniciar.addEventListener("click", reiniciar);

// ===================================
// Comenzar carga
// ===================================
function comenzarCarga(){

    cantidadInstalaciones = Number(txtCantidadInstalaciones.value);
    horasDia = Number(txtHorasDia.value);
    valorHora = Number(txtValorHora.value);

    if(cantidadInstalaciones <= 0 || horasDia <= 0 || valorHora <= 0){

        alert("Complete correctamente los datos.");

    }else{

        txtCantidadInstalaciones.disabled = true;
        txtHorasDia.disabled = true;
        txtValorHora.disabled = true;

        btnComenzar.disabled = true;
        btnAgregar.disabled = false;

    }

}

// ===================================
// Agregar instalación
// ===================================
function agregarInstalacion(){

    let nombre = txtNombreInstalacion.value;
    let personas = Number(txtCantidadPersonas.value);
    let dias = Number(txtCantidadDias.value);

    if(nombre == "" || personas <= 0 || dias <= 0){

        alert("Complete correctamente los datos.");

    }else{
       
        let instalacion = {

            nombre: nombre,
            personas: personas,
            dias: dias

        };

        instalaciones.push(instalacion);
        contador++;

        txtNombreInstalacion.value = "";
        txtCantidadPersonas.value = "";
        txtCantidadDias.value = "";


        if(contador == cantidadInstalaciones){

            btnAgregar.disabled = true;
            btnCalcular.disabled = false;

            txtNombreInstalacion.disabled = true;
            txtCantidadPersonas.disabled = true;
            txtCantidadDias.disabled = true;

        }

    }

}

// ===================================
// Calcular resultados
// ===================================
function calcularResultados(){

    let totalPersonas = 0;
    let costoTotal = 0;

    let mayor = instalaciones[0];

    for(let i = 0; i < instalaciones.length; i++){

        let instalacion = instalaciones[i];

        totalPersonas = totalPersonas + instalacion.personas;

        let costoInstalacion = instalacion.personas * horasDia * valorHora * instalacion.dias;

        costoTotal = costoTotal + costoInstalacion;

        if(instalacion.dias > mayor.dias){

            mayor = instalacion;

        }

    }

    let costoDia = totalPersonas * horasDia * valorHora;

    let costoMayor = mayor.personas * horasDia * valorHora * mayor.dias;

    let porcentaje = costoMayor * 100 / costoTotal;
    
    porcentaje = Math.round(porcentaje * 100) / 100; // redondea el resultado del porcentaje

    resultado1.innerHTML =
    "Costo total de un día de trabajo: $" + costoDia;

    resultado2.innerHTML =
    "La instalación con mayor producción es " +
    mayor.nombre +
    ". Su costo total es $" +
    costoMayor;

    resultado3.innerHTML =
    "Representa el " +
    porcentaje +
    "% del costo total del estudio.";

    btnCalcular.disabled = true;
    btnReiniciar.disabled = false;
''
}

// ===================================
// Reiniciar
// ===================================
function reiniciar(){

    location.reload();

}
