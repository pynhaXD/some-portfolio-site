function changeImg() {
    const image = document.querySelector('.about__img');

    if (window.innerWidth <= 690) {
       image.src = "images/human-addapative.jpg";
    }
}

window.addEventListener('load', changeImg);
window.addEventListener('resize', changeImg);

const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open')
})