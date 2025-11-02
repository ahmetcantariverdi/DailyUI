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

//! massage:not

document.addEventListener('DOMContentLoaded', (event) => {
    const massageBox = document.getElementById('message-container');
    const closeButton = document.getElementById('close-message');
    
    if (massageBox) {
        setTimeout(() => {
            massageBox.style.display = 'block';
        }, 2000);
    }

    if (closeButton && massageBox) {
        closeButton.addEventListener('click', () => {
            massageBox.style.display = 'none';
        });
    }
});