/* const navbar = document.getElementsByTagName('nav');
console.log(navbar);

navbar.addEventListener('scroll', () => {
    console.log(parseInt(navbar.style.top));
    if (parseInt(navbar.style.top)>= -100) {
        navbar.style.top = 0;
        navbar.style.position = "fixed";
    }
}) */

const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener ('click', e => {
    if (username.value == '') {
        username.style.border = '1px dashed red';
    }
    if(password.value == '') {
        password.style.border = '1px dashed red'
    }
})