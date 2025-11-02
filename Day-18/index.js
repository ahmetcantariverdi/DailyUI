const slider = document.getElementById("profileSlider");
const nextBtn = document.getElementById("nextBtn");      
const prevBtn = document.getElementById("prevBtn");      

let currentIndex = 0; 
const cardWidth = 250 + 16; 
const visibleCards = 3;

nextBtn.addEventListener("click", () => {
  const maxIndex = slider.children.length - visibleCards; 
  if (currentIndex < maxIndex) {
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`; 
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`; 
  }
});
