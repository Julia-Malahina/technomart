;(function () {


    var mapOpen = document.querySelector(".map");
    var mapModal = document.querySelector(".google-map");
    var mapClose = document.querySelector(".model-content-close");


    mapOpen.addEventListener("click", function (event) {
        event.preventDefault();
        mapModal.classList.add("map-content-show");
    });

    mapClose.addEventListener("click", function (event) {
        event.preventDefault();
        mapModal.classList.remove("map-content-show");
        mapModal.classList.remove("map-error");
    });

}());

