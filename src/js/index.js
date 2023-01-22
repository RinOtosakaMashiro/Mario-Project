const buttontrailer = document.querySelector('.button-trailer');

const popup1 = document.querySelector('.pop-up1');

const closepopup1 = document.querySelector('.close-pop-up1');

const video = document.getElementById('video');

const videolink = video.src;

function swap(){
    popup1.classList.toggle('open');
}

buttontrailer.addEventListener('click', () => {
    swap();
    video.setAttribute('src', videolink);
});

closepopup1.addEventListener('click', () => {
    swap();
    video.setAttribute('src', '');
});