const slider = document.getElementById('slider');
const items = slider.querySelectorAll('.item');
const quantity = items.length;

function rotateToCard(index) {
  const deg = 360 / quantity;
  slider.style.transition = 'transform 0.8s cubic-bezier(.28,1.41,.53,.96)';
  slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${-index * deg}deg)`;
  slider.style.animation = 'none';
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');
}

items.forEach((item, i) => {
  item.addEventListener('click', () => rotateToCard(i));
});
