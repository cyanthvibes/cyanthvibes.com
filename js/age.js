var today = new Date();
var birthDate = new Date("1998/03/04");
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
age--;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("age").innerHTML = age.toString() + "/M | he/him";
})


