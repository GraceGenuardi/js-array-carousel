//MILESTONE 2:Al click dell’utente sulle frecce (una a sinistra e una a destra), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. 

//MILESTONE 2:Al click dell’utente sulle frecce (una a sinistra e una a destra), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. 


//1. Dichiariamo le constanti slide, arrow e current slide del nostro carosello
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentSlide = 0;

//2. Resetto le slide con for per dare display none
function reset() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
  }

//3. Diamo display block allo slideshow
function startSlide() {
    reset();
    slides[0].style.display = 'block';
  }  


 //4. Preview delle slide
function prevSlide() {
    reset();
    slides[currentSlide - 1].style.display = 'block';
    currentSlide--;
  } 

