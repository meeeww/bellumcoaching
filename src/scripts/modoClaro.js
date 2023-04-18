import bellumVideo from '../assets/VideoBellum.mp4'
import bellumVideoLight from '../assets/VideoBellumLight.mp4'

let modoOscuro = true

const toggleClaro = function() {
    var element = document.body;
    element.classList.toggle("light-mode");

    element = document.querySelectorAll("[id='h4']");
    for (var i = 0; i < element.length; i++) {
        element[i].classList.toggle("light-mode");
    }

    element = document.querySelector(".custom-shape-divider-top-1681756534 .shape-fill")
    element.classList.toggle("light-mode")

    element = document.querySelector(".custom-shape-divider-bottom-1681757470 .shape-fill")
    element.classList.toggle("light-mode")

    element = document.querySelector(".copyrightFooter")
    element.classList.toggle("light-mode-inverso")

    element = document.querySelector(".redesSociales")
    element.classList.toggle("light-mode-inverso")

    element = document.querySelectorAll(".tarjetaCoaching");
    for (var i = 0; i < element.length; i++) {
        element[i].classList.toggle("light-mode-bordes");
    }

    

    switch(modoOscuro){
        case true:
            element = document.querySelector(".videoDark")
            console.log(element)
            element.setAttribute("src", bellumVideoLight)
            modoOscuro = false;
            break;
        case false:
            element = document.querySelector(".videoDark")
            element.setAttribute("src", bellumVideo)
            modoOscuro = true;
            break;
    }
}

export default toggleClaro