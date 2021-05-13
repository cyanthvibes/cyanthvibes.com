var currentDate = new Date();
var birthDate = new Date('1998/03/04');
var age = currentDate.getFullYear() - birthDate.getFullYear();
var month = currentDate.getMonth() - birthDate.getMonth();
if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
age--;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('age').innerHTML = age.toString() + '/M | he/him';
})


