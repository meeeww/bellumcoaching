import bellumVideo from '../assets/VideoBellum.mp4'
import bellumVideoLight from '../assets/VideoBellumLight.mp4'

let modoOscuro = true

const toggleClaro = function () {
    if(localStorage.getItem("modoOscuro") == null){
        localStorage.setItem("modoOscuro", "true")
    }

    if (localStorage.getItem("modoOscuro") == "true") {
        localStorage.setItem("modoOscuro", "false")
    } else if (localStorage.getItem("modoOscuro") == "false") {
        localStorage.setItem("modoOscuro", "true")
    }

    var element = document.body;
    element.classList.toggle("light-mode");

    element = document.querySelectorAll("[id='h4']");
    for (var i = 0; i < element.length; i++) {
        element[i].classList.toggle("light-mode");
    }

    element = document.querySelectorAll(".shape-fill")
    for (var i = 0; i < element.length; i++) {
        element[i].classList.toggle("light-mode");
    }

    element = document.querySelector(".copyrightFooter")
    element.classList.toggle("light-mode-inverso")

    try {
        element = document.querySelector(".redesSociales")
        element.classList.toggle("light-mode-inverso")

        element = document.querySelectorAll(".paragraphDecision")
        for (var i = 0; i < element.length; i++) {
            element[i].classList.toggle("light-mode");
        }

        element = document.querySelector(".paragraphTrustpilot")
        element.classList.toggle("light-mode-texto-inverso")

        element = document.querySelectorAll(".tarjetaCoaching");
        for (var i = 0; i < element.length; i++) {
            element[i].classList.toggle("light-mode-bordes");
        }

        switch (modoOscuro) {
            case true:
                element = document.querySelector(".videoDark")
                element.setAttribute("src", bellumVideoLight)
                modoOscuro = false;
                break;
            case false:
                element = document.querySelector(".videoDark")
                element.setAttribute("src", bellumVideo)
                modoOscuro = true;
                break;
        }
    } catch {
    }




    element = document.querySelector(".paragraphCopyright")
    element.classList.toggle("light-mode-texto")

    element = document.querySelector(".paragraphFooter")
    element.classList.toggle("light-mode-texto-inverso")





    element = document.querySelectorAll(".textoHeader")
    for (var i = 0; i < element.length; i++) {
        element[i].classList.toggle("light-mode-texto-inverso-header");
    }


}

export default toggleClaro