var picPaths = ['img/picture1.jpg','img/picture2.png','img/picture3.jpg','img/picture4.jpg'];
var curPic = -1;

var imgO = new Array();
for(i=0; i < picPaths.length; i++) {
imgO[i] = new Image();
imgO[i].src = picPaths[i];
}

function swapImage() {
curPic = (++curPic > picPaths.length-1)? 0 : curPic;
imgCont.src = imgO[curPic].src;
setTimeout(swapImage,3000);
}

window.onload=function() {
    imgCont = document.getElementById('profile');
    swapImage();
}
