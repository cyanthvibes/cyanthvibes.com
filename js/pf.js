document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.getElementById("gallery-images");

    if (!galleryImages) return;

    galleryImages.addEventListener("animationend", (event) => {
        if (event.target instanceof HTMLImageElement && event.target.parentElement === galleryImages) {
            galleryImages.append(event.target);
        }
    });
});
