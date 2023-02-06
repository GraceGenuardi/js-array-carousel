//MILESTONE 2:Al click dell’utente sulle frecce (una a sinistra e una a destra), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. 


//1. Dichiariamo le constanti slide, arrow e current slide del nostro carosello
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentSlide = 0;

