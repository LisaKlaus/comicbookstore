const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

function choiceMain() {
    console.log("main theme");
    header.style.background = 'aquamarine';
    header.style.transition = '1s ease-out .5s'
}



function choiceSecond() {
    console.log("second theme");
    header.style.background = 'cadetblue';
    header.style.transition = '1s ease-out .5s'
}