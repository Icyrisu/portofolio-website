const toggle = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});