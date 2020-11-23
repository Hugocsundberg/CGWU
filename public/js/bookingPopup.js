const modal = document.querySelector('.popup');

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

document.getElementById('news-btn').addEventListener('click', () => {
  modal.style.display = 'flex';
});

document.getElementById('close').addEventListener('click', () => {
  modal.style.display = 'none';
});
