let currentIndex = 0;

const slides = document.querySelectorAll('.viewpager-slide');
const totalSlides = slides.length;
const viewpager = document.querySelector('.viewpager');

viewpager.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    moveSlide(1);
  } else {
    moveSlide(-1);
  }
});

function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateView();
}

function updateView() {
  const offset = -currentIndex * 100;
  viewpager.style.transform = `translateY(${offset}%)`;
}
