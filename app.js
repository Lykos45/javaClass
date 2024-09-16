let name = prompt("Hello! What is your name?");
alert("Nice to meet you, " + name + "!");
document.write("Hello " + name + ", welcome to my website!")

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})