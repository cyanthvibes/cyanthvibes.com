window.addEventListener("DOMContentLoaded", function(e) {

    var galleryImages = document.getElementById("gallery-images");
    var fadeComplete = function(e) { galleryImages.appendChild(arr[0]); };
    var arr = galleryImages.getElementsByTagName("img");
    for(var i=0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
    }

}, false);