
// modal opens when we click on image

const galleryImages = document.querySelectorAll('.gallery__image');
const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal__image');
const modalClose = document.querySelector('.modal__close');

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImage.src = image.src;
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}





