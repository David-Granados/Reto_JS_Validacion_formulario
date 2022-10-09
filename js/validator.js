/**
 * Create alert and selector element
 */
 function $(selector) {
    return document.querySelector(selector);
}
//  function myAlert(msg){
//     var div = document.createElement("div");
//     div.classList.add("alert");
//     div.innerHTML=msg;
//     var close = document.createElement("span");
//     close.style.float="right";
//     close.classList.add("close");
//     close.innerHTML="X";
//     div.appendChild(close);
//     $("body").insertBefore(div,$("body").firstChild);
//     bind_close();
// }
// function bind_close() {
//     let elements = document.querySelectorAll(".close");
//     for (var i = elements.length - 1;i>=0; i--) {
//         let el = elements[i];
//         el.addEventListener("click",function(){
//             this.parentNode.style.display = "none";
//         })
//     }
// }
/**
 * Create vars for get input a HTML
 */

var expresion_regular_mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

/**
 * Iban
 */
//  function smellsLikeIban(str){
//     return /^([A-Z]{2}[ \-]?[0-9]{2})(?=(?:[ \-]?[A-Z0-9]){9,30}$)((?:[ \-]?[A-Z0-9]{3,5}){2,7})([ \-]?[A-Z0-9]{1,3})?$/.test(str);
//    }
   
//    function validateIbanChecksum(iban) {       
//      const ibanStripped = iban.replace(/[^A-Z0-9]+/gi,'') //keep numbers and letters only
//                               .toUpperCase(); //calculation expects upper-case
//      const m = ibanStripped.match(/^([A-Z]{2})([0-9]{2})([A-Z0-9]{9,30})$/);
//      if(!m) return false;
     
//      const numbericed = (m[3] + m[1] + m[2]).replace(/[A-Z]/g,function(ch){
//                            return (ch.charCodeAt(0)-55); 
//                        });
//      const mod97 = numbericed.match(/\d{1,7}/g)
//                              .reduce(function(total, curr){ return Number(total + curr)%97},'');
   
//      return (mod97 === 1);
//    };

/**
 * Create validators
 */
// if (condition) {
//     myAlert("");
// }
// function nif(dni){   
//     if(expresion_regular_dni.test (dni) == true){
//        numero = dni.substr(0,dni.length-1);
//        letr = dni.substr(dni.length-1,1);
//        numero = numero % 23;
//        letra='TRWAGMYFPDXBNJZSQVHLCKET';
//        letra=letra.substring(numero,numero+1);
//       if (letra!=letr.toUpperCase()) {
//         myAlert('Dni erroneo, la letra del NIF no se corresponde');
//        }else{
//         myAlert('Dni correcto');
//        }
//     }else{
//         myAlert('Dni erroneo, formato no válido');
//      }
//   }
/**
 * When all validators are OK, clear all inputs
 */
 $(".btn").addEventListener("click",validar());