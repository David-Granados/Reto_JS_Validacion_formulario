/**
 * Create alert and selector element
 */
 function $(selector) {
    return document.querySelector(selector);
}
 function myAlert(msg){
    var div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML=msg;
    var close = document.createElement("span");
    close.style.float="right";
    close.classList.add("close");
    close.innerHTML="X";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();
}
function bind_close() {
    let elements = document.querySelectorAll(".close");
    for (var i = elements.length - 1;i>=0; i--) {
        let el = elements[i];
        el.addEventListener("click",function(){
            this.parentNode.style.display = "none";
        })
    }
}
/**
 * Create vars for get input a HTML
 */
var firstname = $("name"); 
var surname = $("surnames"); 
var mail = $("mail"); 
var telf = $("telf"); 
var dni = $("dni"); 
var iban = $("iban"); 
var swift = $("swift"); 
var username = $("username"); 
var birthday = $("birthday"); 

/**
 * Create validators
 */
// if (condition) {
//     myAlert("");
// }
function nif(dni){
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
        myAlert('Dni erroneo, la letra del NIF no se corresponde');
       }else{
        myAlert('Dni correcto');
       }
    }else{
        myAlert('Dni erroneo, formato no válido');
     }
  }
/**
 * When all validators are OK, clear all inputs
 */
 $("#btn").addEventListener("click",function(){
    nif(dni);
    
});
