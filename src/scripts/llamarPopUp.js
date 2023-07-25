function llamarPopUp() {
    if (!document.querySelector(".activePopUp")) {
        document.querySelector(".containerPopUpMain").classList.toggle("activePopUp")
    }
}

export default llamarPopUp