document.getElementById('news-btn').addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'flex';
});

document.getElementById('close').addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'none';
});
