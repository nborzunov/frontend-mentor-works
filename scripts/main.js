const gradient = [
  'linear-gradient(to right, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)',
  'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 25%, hsl(224, 65%, 95%) 25%, hsl(224, 65%, 95%) 100%)',
  'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%, hsl(224, 65%, 95%) 100%)',
  'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 75%, hsl(224, 65%, 95%) 75%, hsl(224, 65%, 95%) 100%)',
  'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 100%)'
];
const prices = [
  ['$8.00','$12.00','$16.00','$24.00','$36.00'],
  ['$6.00','$8.00','$12.00','$18.00','$27.00']
];

const viewsArr = ['10K pageviews', '50K pageviews', '100K pageviews', '500K pageviews', '1M pageviews'];

const slider = document.getElementById('slider');
const toggle = document.getElementById('switch');

const price = document.getElementById('price');
const views = document.getElementById('views');
const period = document.getElementById('period');


toggle.addEventListener('change', (e) => {

  period.innerText = toggle.checked ? ' / year' : '/ month' ;
  console.log(period.innerText)
  price.innerText = prices[toggle.checked ? 0 : 1][slider.value - 1];
});

slider.addEventListener('mousemove', (e) => {
  price.innerText = prices[toggle.checked ? 0 : 1][slider.value - 1];
  slider.style.background = gradient[slider.value - 1];
  views.innerText = viewsArr[slider.value -1];
});

slider.addEventListener('change', (e) => {
  price.innerText = prices[toggle.checked ? 0 : 1][slider.value - 1];
});




