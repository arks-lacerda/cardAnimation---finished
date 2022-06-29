const tennis1 = document.getElementById('tennis-1');
const tennis2 = document.getElementById('tennis-2');

const arrowRight = document.getElementById('right');
const arrowLeft = document.getElementById('left');

arrowLeft.addEventListener('click', () => {
  tennis1.style.left = '40.625rem';
  tennis2.style.left = '-3.125rem';
})

arrowRight.addEventListener('click', () => {
  tennis1.style.left = '-3.125rem';
  tennis2.style.left = '40.625rem';
})