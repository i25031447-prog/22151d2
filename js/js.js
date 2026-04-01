const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');
if (menuBtn && navList) {
  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

const carouselItems = document.querySelectorAll('.carousel-item');
const carouselIndicators = document.querySelectorAll('.carousel-indicators span');
let currentSlide = 0;

if (carouselItems.length > 0 && carouselIndicators.length > 0) {
  function showSlide(index) {
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselIndicators.forEach(indicator => indicator.classList.remove('active'));
    carouselItems[index].classList.add('active');
    carouselIndicators[index].classList.add('active');
    currentSlide = index;
  }

  carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
    });
  });

  function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 5000);
}

const tabBtns = document.querySelectorAll('.route-type[data-tab]');
if (tabBtns.length > 0) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      const target = document.getElementById(targetId);
      if (target) target.classList.add('active');
    });
  });
}

const attractionGrid = document.getElementById('attractionGrid');
const attractionLeft = document.getElementById('attractionLeft');
const attractionRight = document.getElementById('attractionRight');
if (attractionGrid && attractionLeft && attractionRight) {
  let scrollPosition = 0;
  const cardWidth = 430;
  const cardCount = document.querySelectorAll('.attraction-card').length;
  const visibleCount = 3;
  const maxScroll = (cardCount - visibleCount) * cardWidth;

  attractionRight.addEventListener('click', () => {
    if (scrollPosition < maxScroll) {
      scrollPosition += cardWidth;
      attractionGrid.style.transform = `translateX(-${scrollPosition}px)`;
    }
  });

  attractionLeft.addEventListener('click', () => {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      attractionGrid.style.transform = `translateX(-${scrollPosition}px)`;
    }
  });
}

const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');
    question.classList.toggle('active');
  });
});
