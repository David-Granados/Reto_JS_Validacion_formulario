const regexps = {
    regexp_name: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    regexp_mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    regexp_telf: /^\d{9}$/,
    regexp_dni: /^\d{8}[a-zA-Z]$/,
    regexp_iban: /[a-zA-Z]{2}[0-9]{20}$/,
    regexp_swift: /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/,
    regexp_username: /^[a-zA-Z0-9\_\-]{4,20}$/
}
const comprobarCampos = {
    nombre: false,
    apellido: false,
    correo: false,
    telefono: false,
    dni: false,
    iban: false,
    swift: false,
    usuario: false
}
/**
 * Create alert and selector element
 */
//Iban and Swift

const formulario = document.getElementById("form");
const inputs = document.querySelectorAll('#form input');

const validarFormulario = (e) => {
    switch (e.target.id) {
        //Validar Nombre
        case "firstname":
            const nameValidado = regexps.regexp_name;
            var name = e.target.value;
            if (name.match(nameValidado)) {
                const alert_firstname = document.getElementById('firstname');
                alert_firstname.classList.remove('input_incorrect');
                comprobarCampos.nombre = true;
            } else {
                const alert_firstname = document.getElementById('firstname');
                alert_firstname.classList.add('input_incorrect');
                comprobarCampos.nombre = false;
            }
            break;
        //Validar Apellido
        case "surname":
            const surnameValidado = regexps.regexp_name;
            var surname = e.target.value;
            if (surname.match(surnameValidado)) {
                const alert_surname = document.getElementById('surname');
                alert_surname.classList.remove('input_incorrect');
                comprobarCampos.apellido = true;
            } else {
                const alert_surname = document.getElementById('surname');
                alert_surname.classList.add('input_incorrect');
                comprobarCampos.apellido = false;
            }
            break;
        //Validar E-mail
        case "mail":
            const mailValidado = regexps.regexp_mail;
            var mail = e.target.value;
            if (mail.match(mailValidado)) {
                const alert_mail = document.getElementById('mail');
                alert_mail.classList.remove('input_incorrect');
                comprobarCampos.correo = true;
                document.getElementById('textError-mail').style.display = "none";
            } else {
                const alert_mail = document.getElementById('mail');
                alert_mail.classList.add('input_incorrect');
                comprobarCampos.correo = false;
                document.getElementById('textError-mail').style.display = "block";
            }
            break;
        //Validar Telefono
        case "telf":
            const telfValidado = regexps.regexp_telf;
            var telf = e.target.value;
            if (telf.match(telfValidado)) {
                const alert_telf = document.getElementById('telf');
                alert_telf.classList.remove('input_incorrect');
                comprobarCampos.telefono = true;
                document.getElementById('textError-telf').style.display = "none";
            } else {
                const alert_telf = document.getElementById('telf');
                alert_telf.classList.add('input_incorrect');
                comprobarCampos.telefono = false;
                document.getElementById('textError-telf').style.display = "block";
            }
            break;
        //Validar DNI
        case "dni":
            const validadoDni = regexps.regexp_dni;
            var dni = e.target.value;
            if (dni.match(validadoDni)) {
                const alert_dni = document.getElementById('dni');
                const dni = alert_dni.value;
                numero = dni.substr(0, dni.length - 1);
                letr = dni.substr(dni.length - 1, 1);
                numero = numero % 23;
                letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
                letra = letra.substring(numero, numero + 1);
                if (letra != letr.toUpperCase()) {
                    alert_dni.classList.add('input_incorrect');
                    comprobarCampos.dni = false;
                    document.getElementById('textError-dni-letra').style.display = "block";
                } else {
                    alert_dni.classList.remove('input_incorrect');
                    comprobarCampos.dni = true;
                    document.getElementById('textError-dni-letra').style.display = "none";
                    document.getElementById('#textError-dni-valido').style.display = "none";
                }
            } else {
                const alert_dni = document.getElementById('dni');
                alert_dni.classList.add('input_incorrect');
                comprobarCampos.dni = false;
                document.getElementById('#textError-dni-valido').style.display = "block";
            }
            break;
        //Validar Iban
        case "iban":
            var iban = e.target.value;
            var regexp_iban = regexps.regexp_iban;
            if (iban.match(regexp_iban)) {
                const alert_iban = document.getElementById('iban');
                alert_iban.classList.remove('input_incorrect');
                comprobarCampos.iban = true;
                document.getElementById('textError-iban').style.display = "none";
            } else {
                const alert_iban = document.getElementById('iban');
                alert_iban.classList.add('input_incorrect');
                comprobarCampos.iban = false;
                document.getElementById('textError-iban').style.display = "block";
            }
            break;
        //Validar Swift
        case "swift":
            var swift = e.target.value;
            var regexp_swift = regexps.regexp_swift;
            if (swift.match(regexp_swift)) {
                const alert_swift = document.getElementById('swift');
                alert_swift.classList.remove('input_incorrect');
                comprobarCampos.swift = true;
                document.getElementById('textError-swift').style.display = "none";
            } else {
                const alert_swift = document.getElementById('swift');
                alert_swift.classList.add('input_incorrect');
                comprobarCampos.swift = false;
                document.getElementById('textError-swift').style.display = "block";
            }
            break;
        //Validar nombre de usuario
        case "username":
            if (regexps.regexp_username.test(e.target.value)) {
                const alert_username = document.getElementById('username');
                alert_username.classList.remove('input_incorrect');
                comprobarCampos.usuario = true;
            } else {
                const alert_username = document.getElementById('username');
                alert_username.classList.add('input_incorrect');
                comprobarCampos.usuario = false;
            }
            break;
        default:
            break;
    };
}

inputs.forEach((input) => {
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    var confirm = true;
    
    if (document.getElementById('confirm')){
        for (let index = 0; index < comprobarCampos.length; index++) {
            if (comprobarCampos[i] == false) {
                console.log(comprobarCampos[i]);
                confirm = false;
            }
        }
    } else {
        confirm = false;
    }
    if(confirm){
        alert("Has completado el formulario perfectamente.");
        window.location.href("https://www.epicgames.com");
    } else {
        alert("No has completado el formulario perfectamente.");
        e.preventDefault();
        confirm = true;
    }

});
