import { useEffect } from 'react'
import "./Alert.css"

function PopUp(tipo) {

  function getTipo() {
    switch (tipo.tipo.tipoAlerta) {
      case 0: // azul, info rgba(0, 0, 255, 0.3)
        document.querySelector(".containerPopUp").style.backgroundColor = "rgba(0, 120, 255, 1)"
        document.querySelector(".textoPopUp").innerHTML = tipo.tipo.mensajeAlerta
        document.querySelector("#iconoPopUp").classList.toggle = "fa-solid fa-circle-info"
        break;
      case 1: //verde, hecho rgba(0, 255, 255, 0.1)
        document.querySelector(".containerPopUp").style.backgroundColor = "rgba(0, 150, 50, 1)"
        document.querySelector(".textoPopUp").innerHTML = tipo.tipo.mensajeAlerta
        document.querySelector("#iconoPopUp").classList.toggle = "fa-solid fa-circle-check"
        break;
      case 2: //amarillo, warning rgba(255, 255, 0, 0.1)
        document.querySelector(".containerPopUp").style.backgroundColor = "rgba(255, 190, 0, 1)"
        document.querySelector(".textoPopUp").innerHTML = tipo.tipo.mensajeAlerta
        document.querySelector("#iconoPopUp").classList.toggle = "fa-solid fa-circle-question"
        break;
      case 3: //rojo, errror rgba(255, 0, 255, 0.1)
        document.querySelector(".containerPopUp").style.backgroundColor = "rgba(220, 0, 0, 1)"
        document.querySelector(".textoPopUp").innerHTML = tipo.tipo.mensajeAlerta
        document.querySelector("#iconoPopUp").classList.toggle = "fa-solid fa-circle-exclamation"
        break;
    }
  }

  useEffect(() => {
    getTipo()
  })

  return (
    <div className="absolute top-100 right-20 w-[300px] h-[70px] bg-[var(--color-secundario)] flex alertasLogin items-center justify-between pr-4 shadow-lg">
      <div className="h-[70px] flex items-center justify-between">
        <div className="h-full w-[6px] bg-red-500 alertasLogin2 containerPopUp"></div>
        <i className="fa-solid fa-circle-exclamation ml-4 text-[var(--color-principal-light)] hover:scale-110 transition-all" id="iconoPopUp"></i>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="mx-8 textoPopUp">Login failed</p>
        <i className="fa-solid fa-xmark rounded-[50%] mx-4 text-[var(--color-principal-light)] cursor-pointer hover:rotate-90 transition-all" onClick={console.log("aa")}></i>
      </div>

    </div>
  )
}

export default PopUp