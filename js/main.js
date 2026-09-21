console.log('Hello world!');

const nav = document.querySelector('nav');
const btn = document.querySelector('.btn');
const btnTwo = document.querySelector('.btnTwo')
const searchBox = document.querySelector('.search-box');
btn.addEventListener('click', (event) => {
    nav.classList.toggle('toggle');
})

btnTwo.addEventListener('click', (event) => {
    searchBox.classList.toggle('toggletwo');
})