const regexps = {
    regexp_name : /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    regexp_mail : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    regexp_telf : 	/^\d{9}$/,
    regexp_dni : /^\d{8}[a-zA-Z]$/,
    regexp_iban : /[a-zA-Z]{2}[0-9]{20}$/,
    regexp_username : /^[a-zA-Z0-9\_\-]{4,20}$/
}
/**
 * Create alert and selector element
 */

const formulario = document.getElementById("form");

const inputs = document.querySelectorAll('#form input');

const validarFormulario = (e) => {
    switch (e.target.id) {
        case "firstname":
            if (regexps.regexp_name.test(e.target.value)) {
                const alert_firstname = document.getElementById('firstname');
                alert_firstname.classList.remove('input_incorrect');
            }else{
                const alert_firstname = document.getElementById('firstname');
                alert_firstname.classList.add('input_incorrect');
                
            }
            break;
        case "surname":
            if (regexps.regexp_name.test(e.target.value)) {
                const alert_firstname = document.getElementById('surname');
                alert_firstname.classList.remove('input_incorrect');
            }else{
                const alert_firstname = document.getElementById('surname');
                alert_firstname.classList.add('input_incorrect');
            }
            break;
        case "mail":
            if (regexps.regexp_mail.test(e.target.value)) {
                const alert_firstname = document.getElementById('mail');
                alert_firstname.classList.remove('input_incorrect');
                document.getElementById("textError-mail").style.display = "none";
            }else{
                const alert_firstname = document.getElementById('mail');
                alert_firstname.classList.add('input_incorrect');
                document.getElementById("textError-mail").style.display = "block";
            }
            break;
        case "telf":
            if (regexps.regexp_telf.test(e.target.value)) {
                const alert_firstname = document.getElementById('telf');
                alert_firstname.classList.remove('input_incorrect');
                document.getElementById("textError-telf").style.display = "none";
            }else{
                const alert_firstname = document.getElementById('telf');
                alert_firstname.classList.add('input_incorrect');
                document.getElementById("textError-telf").style.display = "block";
            }
            break;
        case "dni":
            console.log(e.target.value);
            if (regexps.regexp_dni.test(e.target.value)) {
                const alert_firstname = document.getElementById('dni');
                const dni = alert_firstname.value;
                numero = dni.substr(0, dni.length - 1);
                letr = dni.substr(dni.length - 1, 1);
                numero = numero % 23;
                letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
                letra = letra.substring(numero, numero + 1);
                if (letra != letr.toUpperCase()){
                    alert_firstname.classList.add('input_incorrect');
                    document.getElementById("textError-dni").style.display = "block";
                }else{
                    alert_firstname.classList.remove('input_incorrect');
                    document.getElementById("textError-dni").style.display = "none";
                }
            }else{
                const alert_firstname = document.getElementById('dni');
                alert_firstname.classList.add('input_incorrect');
                
                
            }
            break;
        case "iban":
            if (regexps.regexp_iban.test(e.target.value)) {
                const alert_firstname = document.getElementById('iban');
                alert_firstname.classList.remove('input_incorrect');
            }else{
                const alert_firstname = document.getElementById('iban');
                alert_firstname.classList.add('input_incorrect');
            }
            break;
        case "swift":
            if (regexps.regexp_name.test(e.target.value)) {
                const alert_firstname = document.getElementById('swift');
                alert_firstname.classList.remove('input_incorrect');
            }else{
                const alert_firstname = document.getElementById('swift');
                alert_firstname.classList.add('input_incorrect');
            }
            break;
        case "username":
            if (regexps.regexp_username.test(e.target.value)) {
                const alert_firstname = document.getElementById('username');
                alert_firstname.classList.remove('input_incorrect');
            }else{
                const alert_firstname = document.getElementById('username');
                alert_firstname.classList.add('input_incorrect');
            }
            break;
        default:
            break;
    };
}

inputs.forEach((input)=>{
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

});
