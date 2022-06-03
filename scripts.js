function formVal() {
    let formNombre = document.getElementById('formNombre');
    let formApellido = document.getElementById('formApellido');
    let formEmail = document.getElementById('formEmail');
    let formTelefono = document.getElementById('formTelefono');
    let mensajeForm = document.getElementById('mensajeForm');
    let formError = document.getElementById('formError');
    let formCampos = [formNombre, formApellido, formEmail, formTelefono, mensajeForm];
    let contador = 0;
    let formEnviado = document.getElementById('formEnviado');


    for (let i = 0; i < formCampos.length; i++) {

        if (formCampos[i].value == "") {
            formCampos[i].style.border = "2px solid red";
            contador += 1;
        }
        
    }

    if (contador > 0) {
        formError.style.visibility = "visible";
        return false
    } else {
        formEnviado.style.visibility = 'visible'
        formEnviado.style.opacity = '1';
        setTimeout(true, 3000,);
    }

}

function inputBlanco(input) {
    input.style.borderColor = "white";
}


function abrirHamb() {
    let menuMobile = document.getElementById('menuMobile');

    menuMobile.style.animationName = 'fadeIn';
    menuMobile.style.opacity = '1';
    menuMobile.style.display = 'flex'; 
}

function cerrarHamb() {
    let menuMobile = document.getElementById('menuMobile');

    menuMobile.style.animationName = 'fadeOut'
    menuMobile.style.opacity = '0'; 

    setTimeout(() => {
        menuMobile.style.display = 'none'; 
    }, 500);
}


