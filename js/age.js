document.addEventListener("DOMContentLoaded", () => {
    const ageElement = document.getElementById("age");

    if (!ageElement) return;

    const birthDate = new Date(1998, 2, 4);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    ageElement.textContent = String(age);
});
