const colorButtons = document.querySelectorAll('.color-buttons label .button');
colorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.parentElement.parentElement.classList.contains('gray')) {
      document.querySelector('section.section-4 .bg-image img').src = 'public/images/bg/color/Studio-gray.webp';
    } else if (e.target.parentElement.parentElement.classList.contains('green')) {
      document.querySelector('section.section-4 .bg-image img').src = 'public/images/bg/color/Studio-green.webp';
    } else if (e.target.parentElement.parentElement.classList.contains('red')) {
      document.querySelector('section.section-4 .bg-image img').src = 'public/images/bg/color/Studio-red.webp';
    } else if (e.target.parentElement.parentElement.classList.contains('blue')) {
      document.querySelector('section.section-4 .bg-image img').src = 'public/images/bg/color/Studio-blue.webp';
    }
  });
});
