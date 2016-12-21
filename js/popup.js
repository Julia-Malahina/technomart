;(function () {


    var popupOpen = document.querySelector(".btn-map");
    var popupModal = document.querySelector(".popup-content");
    var popupClose = document.querySelector(".popup-content-close");


    popupOpen.addEventListener("click", function (event) {
        event.preventDefault();
        popupModal.classList.add("popup-content-show");
    });

    popupClose.addEventListener("click", function (event) {
        event.preventDefault();
        popupModal.classList.remove("popup-content-show");
        popupModal.classList.remove("popup-error");
    });

}());
