var images = [
    'img/picture1.jpg',
    'img/picture2.png',
    'img/picture5.jpg',
    'img/picture4.jpg',
    'img/picture3.jpg',
    'img/picture8.jpg',
    'img/picture7.jpg',
    'img/picture6.jpg'
];

var gallery_index = -1;
var gallery_switching = false;
var gallery_second = true;

function galleryNext() {
    if (gallery_switching)
        return;

    gallery_switching = true;

    gallery_index = (gallery_index + 1) % images.length;

    document.getElementById(gallery_second ? 'gallery_a' : 'gallery_b').src = images[gallery_index];

    gallery_second = !gallery_second;
}

function galleryLoaded() {
    if (!gallery_switching)
        return;
    gallery_switching = false;

    document.getElementById('gallery_b').style.opacity = gallery_second ? 1 : 0;
}

setTimeout(galleryNext, 0); // Fake "onload" here
setInterval(galleryNext, 2500); // Switch once every 5 seconds
