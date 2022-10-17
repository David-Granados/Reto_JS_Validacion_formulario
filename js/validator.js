const regexp_name = /^[a-zA-Z]+[a-zA-Z]+$/;
const regexp_telf = /^[09][0-9]{1,7}$/;
const regexp_mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const regexp_dni = /^\d{8}[a-zA-Z]$/;
const regexp_iban = /[a-zA-Z]{2}[0-9]{20}$/;
const regexp_username = /^[A-Za-z]\\w{5,29}$/;
/**
 * Alerts
 */
function myAlert(msg){
    var div = document.createElement("div");
    div.style.background = "grey";
    div.style.color = "white";
    div.style.textAlign = "center";
    div.classList.add("alert");
    div.innerHTML = msg;
    var close = document.createElement("span");
    close.style.float = "right";
    close.style.marginRight = "2%";
    close.classList.add("close");
    close.innerHTML = "X";
    div.appendChild(close);
    $("body").insertBefore(div, $("body").firstChild);
    bind_close();
}
/**
 * Create alert and selector element
 */
function $(selector){
    return document.querySelector(selector);
}
//Validadores
function validatorFirstname(){
    const firstname = document.getElementById("firstname").value;
    if (!firstname.match(regexp_name)){
        myAlert("Nombre erróneo. Formato no válido");
    }
}
function validatorSurname(){
    const surname = document.getElementById("surnames").value;
    if (!surname.match(regexp_name)){
        myAlert("Apellidos erróneos. Formato no válido");
    }
}
function validatorEmail() {
    const mail = document.getElementById("mail").value;
    if (!mail.match(regexp_mail)){
        myAlert("Formato de Email no valido (alguien@dominio.org)");
    }
}
function validatorTelephone(){
    //Telephone
    const telephone = document.getElementById("telf").value;
    if (!telephone.match(regexp_telf)){
        myAlert("Formato de telefono no válido (+34600000000)");
    }
}
function validaroDNI(){
    const dni = document.getElementById("dni").value;
    if (dni.match(regexp_dni)) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()){
            myAlert('Dni erroneo, la letra del NIF no se corresponde');

        }
    }else{
       myAlert('Dni erroneo, formato no válido');
    }
}
function validatorIBAN(){
    const iban = document.getElementById("iban").value;
    if(!iban.match(regexp_iban)){
        myAlert("Formato de IBAN no válido (ES00 0000 0000 0000)");
    }
}
function validatorSwift(){
    const iban = document.getElementById("iban").value;
}
function validorUserName(){
    const username = document.getElementById("username").value;
    if (!expresion_regular_username.match(regexp_username)) {
        myAlert("Nombre de usuario erroneo, formato no válido");
    }
}
