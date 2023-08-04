function llamarPopUp() {
    if (!document.querySelector(".activePopUp")) {
        document.querySelector(".containerPopUpMain").classList.toggle("activePopUp")
        setTimeout(() => {
            document.querySelector(".containerPopUpMain").classList.toggle("activePopUp")
        }, 2000);
    }
}

export default llamarPopUp