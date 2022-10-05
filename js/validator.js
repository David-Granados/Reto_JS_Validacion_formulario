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
var firstname = selector("name"); 
var surname = selector("surnames"); 
var mail = selector("mail"); 
var telf = selector("telf"); 
var dni = selector("dni"); 
var iban = selector("iban"); 
var swift = selector("swift"); 
var username = selector("username"); 
var birthday = selector("birthday"); 

/**
 * Create validators
 */
if (condition) {
    myAlert("");
}
/**
 * When all validators are OK, clear all inputs
 */
$("#btn").addEventListener("click",()=>{

});
