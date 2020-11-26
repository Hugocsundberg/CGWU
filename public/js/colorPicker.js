const colorButtons = document.querySelectorAll('.color-buttons label .button');
colorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.parentElement.parentElement.classList.contains('gray')) {
      document.querySelector('section.section-4 .bg-image img').src = 'images/bg/color/Studio-gray.png';
    } else if (e.target.parentElement.parentElement.classList.contains('green')) {
      document.querySelector('section.section-4 .bg-image img').src = 'images/bg/color/Studio-green.png';
    } else if (e.target.parentElement.parentElement.classList.contains('red')) {
      document.querySelector('section.section-4 .bg-image img').src = 'images/bg/color/Studio-red.png';
    } else if (e.target.parentElement.parentElement.classList.contains('blue')) {
      document.querySelector('section.section-4 .bg-image img').src = 'images/bg/color/Studio-blue.png';
    }
  });
});
