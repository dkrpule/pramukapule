const slider = document.getElementById('sliderImage');
const images = ['img/banner1.jpg', 'img/banner2.jpg', 'img/banner3.jpg'];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  slider.src = images[index];
}, 5000);
