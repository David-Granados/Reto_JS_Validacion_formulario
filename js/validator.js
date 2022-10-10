/**
 * Alerts
 */
 function myAlert(msg){
    var div = document.createElement("div");
    div.style.background="grey";
    div.style.color="white";
    div.style.textAlign="center";
    div.classList.add("alert");
    div.innerHTML=msg;
    var close = document.createElement("span");
    close.style.float="right";
    close.style.marginRight="2%";
    close.classList.add("close");
    close.innerHTML="X";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();
}
/**
 * Create alert and selector element
 */
function $(selector) {
    return document.querySelector(selector);
}
const expresion_regular_name = /^[a-zA-Z]+[a-zA-Z]+$/;
const expresion_regular_telf = /^[09][0-9]{1,7}$/;
const expresion_regular_mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
const expresion_regular_iban = /[a-zA-Z]{2}[0-9]{20}$/;
const expresion_regular_username = /^[A-Za-z]\\w{5,29}$/;

$("#btn").addEventListener("click", (e) => {
    e.preventDefault();
    //Firstname
    const firstname = document.getElementById("firstname").value;
    if (!firstname) {
        myAlert("Campo nombre vacío");
    } else {
        if (!expresion_regular_name.test(firstname)) {
            myAlert("Nombre erróneo. Formato no válido");
        }
    }
    //Surname
    const surname = document.getElementById("surnames").value;
    if (!surname) {
        myAlert("Campo apellidos vacío");
    } else {
        if (!expresion_regular_name.test(surname)) {
            myAlert("Apellidos erróneos. Formato no válido");
        }
    }
    //Mail
    const mail = document.getElementById("mail").value;
    if (!mail) {
        myAlert("Campo Email vacío");
    } else {
        if (!expresion_regular_mail.test(mail)) {
            myAlert("Formato de Email no valido");
        }
    }
    //Telephone
    const telephone = document.getElementById("telf").value;
    if (!telephone) {
        myAlert("Campo teléfono vacío");
    }else{
        if(!expresion_regular_telf.test(telephone)){
            myAlert("Formato de telefono no válido");
        }
    }
    //DNI
    const dni = document.getElementById("dni").value;
    if (expresion_regular_dni.test(dni)) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            myAlert('Dni erroneo, la letra del NIF no se corresponde');
        } else {
            myAlert('Dni correcto');
        }
    } else {
        if (dni) {
            myAlert('Dni erroneo, formato no válido');
        } else {
            myAlert('Campo DNI vacío');
        }
    }
    //IBAN
    const iban = document.getElementById("iban").value;
    if (iban) {
        if (!expresion_regular_iban.test(iban)) {
            myAlert("IBAN erroneo, formato no válido");
        }
    } else {
        myAlert("Campo IBAN vacío");
    }
    //Swift
    const swift = document.getElementById("swift").value;
    if (!swift) {
        myAlert("Campo swift vacío");
    }else{
        if(!expresion_regular_swift.test(swift)){
            myAlert("Swift erroneo, formato no válido");
        }
    }
    //User name
    const username = document.getElementById("username").value;
    if (!username) {
        myAlert("Campo Nombre de Usuario vacío");
    } else {
        if (!expresion_regular_username.test(username)) {
            myAlert("Nombre de usuario erroneo, formato no válido");
        }
    }
    //Birthday
    const birthday = document.getElementById("birthday").value;
    if (!birthday) {
        myAlert("Campo Fecha de nacimiento vacío");
    }
});