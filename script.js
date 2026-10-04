// Elements

const openPopup = document.getElementById("openPopup");

const closePopup = document.getElementById("closePopup");

const popup = document.getElementById("popup");

// Open Popup

openPopup.addEventListener("click", () => {

    popup.classList.add("show");

});

// Close Popup

closePopup.addEventListener("click", () => {

    popup.classList.remove("show");

});

// Close When Click Outside

window.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.classList.remove("show");

    }

});