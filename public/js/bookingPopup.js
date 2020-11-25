const modal = document.querySelector('.popup');
const link = document.querySelector('.nav-bar a');

// Booking popup closes when the Escape key is pressed.
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
  }
});
// Booking popup closes when user clicks outside of the form.
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};

// Booking popup opens when user clicks on 'Booking'.
document.getElementById('bookingBtn').addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

// Booking popup closes when user clicks on the X.
document.getElementById('close').addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'none';
});

// Preventing the page scrolling back to top if Merch in the navigation bar is clicked.
// document.getElementById('merchBtn').addEventListener('click', (e) => {
//   e.preventDefault();
// });
