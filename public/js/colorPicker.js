// // Array for mobile backgrounds and its respective color button.
// const mobile = [
//   {
//     path: 'images/bg/color/mobile/',
//     src: 'Mobile-5-blue.jpg',
//   },
//   {
//     path: 'images/bg/color/mobile/',
//     src: 'Mobile-5-red.jpg',
//   },
//   {
//     path: 'images/bg/color/mobile/',
//     src: 'Mobile-5-yellow.jpg',
//   },
//   {
//     path: 'images/bg/color/mobile/',
//     src: 'Mobile-5-white.jpg',
//   },
// ];

// // Array for desktop backgrounds and its respective color button.
// const desktop = [
//   {
//     path: 'images/bg/color/desktop/',
//     src: 'Desktop-5-blue.jpg',
//   },
//   {
//     path: 'images/bg/color/desktop/',
//     src: 'Desktop-5-red.jpg',
//   },
//   {
//     path: 'images/bg/color/desktop/',
//     src: 'Desktop-5-yellow.jpg',
//   },
//   {
//     path: 'images/bg/color/desktop/',
//     src: 'Desktop-5-white.jpg',
//   },
// ];

const colorButtons = document.querySelectorAll('.color-buttons label .button');
colorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.parentElement.parentElement.classList.contains('white')) {
      document.querySelector('section.section-4 .bg-image img').src = '/public/images/bg/color/desktop/Studio_bil_vit.png';
    } else if (e.target.parentElement.parentElement.classList.contains('yellow')) {
      document.querySelector('section.section-4 .bg-image img').src = '/public/images/bg/color/desktop/Studio_bil_gul.png';
    } else if (e.target.parentElement.parentElement.classList.contains('red')) {
      document.querySelector('section.section-4 .bg-image img').src = '/public/images/bg/color/desktop/Studio_bil_röd.png';
    } else if (e.target.parentElement.parentElement.classList.contains('blue')) {
      document.querySelector('section.section-4 .bg-image img').src = '/public/images/bg/color/desktop/Studio_bil_blå.png';
    }
  });
});
