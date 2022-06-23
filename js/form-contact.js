var boton_envio = document.querySelector("#enviar");
var formulario = document.querySelector("#contacto_form");

boton_envio.addEventListener("click", function(event) {

    var persona_cliente = capturarDatosPersona(formulario);
    console.log(persona_cliente);

    console.log(validacion(persona_cliente));

    if (validacion(persona_cliente) == 0) {
        OcultarMensajes();
        //alert("Bien");

    } else {
        event.preventDefault();
        //alert("Error en le formulario");

    }
    //console.log(formulario.childNodes);


});

function capturarDatosPersona(form) {

    var persona = {
        nombre: form.nombre.value,
        email: form.email.value,
        asunto: form.asunto.value,
        mensaje: form.mensaje.value
    }

    return persona;
}
/*
function mostrar_Errores() {
    for (var i = 0; i < formulario.childNodes.length; i++) {
        if (formulario.childNodes[i].className == "error") {
            //console.log(formulario.childNodes[i]);

            formulario.childNodes[i].style = ["display:block;"];
        } else {
            //console.log(formulario.childNodes);
        }
    }
}
*/

function OcultarMensajes() {
    var lista_Errores = document.querySelectorAll(".error");
    for (var j = 0; j < lista_Errores.length; j++) {
        lista_Errores[j].style = ["display:none;"];
    }
}

function validacion(persona) {
    var errores = 0;
    var lista_Errores = document.querySelectorAll(".error");

    console.log(persona.nombre);
    if (!validacionCadena(persona.nombre)) {
        lista_Errores[0].style = ["display:block;"];
        errores++;
    }

    if (!validacionCadena(persona.email)) {
        lista_Errores[1].style = ["display:block;"];
        errores++;
    }

    if (!validateEmail(persona.email)) {
        lista_Errores[2].style = ["display:block;"];
        errores++;
    }

    if (!validacionCadena(persona.asunto)) {
        lista_Errores[3].style = ["display:block;"];
        errores++;
    }

    if (!validacionCadena(persona.mensaje)) {
        lista_Errores[4].style = ["display:block;"];
        errores++;
    }

    return errores;
}

function validateEmail(email) {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

function validacionCadena(palabra) {
    if (palabra.length != 0) {
        return true;
    }
    return false;
}