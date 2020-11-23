// Script to load background images depending on screen-width and to create buttons for our color-picker.
const img = document.querySelector('#color-bg');

window.addEventListener('resize', function () {
  window.location.reload();
});

// const isMobile = window.innerWidth < 800 ? true : false;
// window.addEventlistener('resize', ()=>{

// Array for mobile backgrounds and its respective color button.
const mobile = [
  {
    path: 'images/bg/color/mobile/',
    src: 'Mobile-5-blue.jpg',
    color: '#0000CD',
  },
  {
    path: 'images/bg/color/mobile/',
    src: 'Mobile-5-red.jpg',
    color: '#B22222',
  },
  {
    path: 'images/bg/color/mobile/',
    src: 'Mobile-5-yellow.jpg',
    color: '#FFD700',
  },
  {
    path: 'images/bg/color/mobile/',
    src: 'Mobile-5-white.jpg',
    color: '#F5FFFA',
  },
];

// Array for desktop backgrounds and its respective color button.
const desktop = [
  {
    path: 'images/bg/color/desktop/',
    src: 'Desktop-5-blue.jpg',
    color: '#0000CD',
  },
  {
    path: 'images/bg/color/desktop/',
    src: 'Desktop-5-red.jpg',
    color: '#B22222',
  },
  {
    path: 'images/bg/color/desktop/',
    src: 'Desktop-5-yellow.jpg',
    color: '#FFD700',
  },
  {
    path: 'images/bg/color/desktop/',
    src: 'Desktop-5-white.jpg',
    color: '#F5FFFA',
  },
];

const colorButtons = document.querySelectorAll('.color-buttons label > input');
console.log(colorButtons);
colorButtons.array.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('ok');
  });
});

// const index = 0;
// // Function to create color buttons for mobile.
// function colors() {
//   for (let i = 0; i < mobile.length; i++) {
//     const button = document.createElement('button');
//     button.id = i;
//     button.setAttribute('onclick', 'changeImage(this)');
//     button.style.backgroundColor = mobile[i].color;
//     // add active class to button
//     if (i == index) {
//       button.classList.add('active');
//     }

//     document.querySelector('.colors').appendChild(button);
//   }
// }

// // If the browser width is smaller than 800px.
// if (window.innerWidth <= 800) {
//   // Function to change mobile background when color buttons are clicked and are active.

//   function changeImage(element) {
//     img.src = mobile[element.id].path + mobile[element.id].src;
//     const buttons = document.querySelector('.colors').children;

//     for (let i = 0; i < buttons.length; i++) {
//       if (buttons[i].id == element.id) {
//         buttons[i].classList.add('active');
//       } else {
//         buttons[i].classList.remove('active');
//       }
//     }
//   }

//   // Set mobile background by default.
//   img.src = mobile[index].path + mobile[index].src;

//   // If the browser width is larger than 800px.
// } else {
//   // Function to change mobile background when color buttons are clicked and are active.
//   function changeImage(element) {
//     img.src = desktop[element.id].path + desktop[element.id].src;
//     const buttons = document.querySelector('.colors').children;

//   // Set mobile background by default.
//   img.src = desktop[index].path + desktop[index].src;
// }
// // Calling the colors function when window is loaded.
// window.onload = colors();
