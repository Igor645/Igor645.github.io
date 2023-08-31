const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const items = document.querySelectorAll('.item');
let currentIndex = 0;

function showItem(index, direction) {
    items.forEach(item => item.classList.remove('active', 'left', 'right', 'appear-left', 'appear-right'));
    items[currentIndex].classList.add(direction === 'left' ? 'appear-left' : 'appear-right');
    items[index].classList.add('active', direction === 'left' ? 'appear-left' : 'appear-right');

    setTimeout(() => {
        items[currentIndex].classList.remove('appear-left', 'appear-right');
    }, 500); 
}

prevButton.addEventListener('click', () => {
    items[currentIndex].classList.add("swipe-right")
    setTimeout(() => {
      items[currentIndex].classList.remove("active")
          items[currentIndex].classList.remove('swipe-left', 'swipe-right');
          currentIndex = (currentIndex - 1 + items.length) % items.length;
          showItem(currentIndex, 'left');
      }, 200);
});

nextButton.addEventListener('click', () => {
    items[currentIndex].classList.add("swipe-left")
    setTimeout(() => {
      items[currentIndex].classList.remove("active")
      items[currentIndex].classList.remove('swipe-left', 'swipe-right');
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex, 'right');
    }, 200);
});

showItem(currentIndex, 'left');

const skills = document.querySelectorAll('.skill');

skills.forEach((skill, index) => {
  skill.style.animationDelay = `${index * 0.7}s`;
});

