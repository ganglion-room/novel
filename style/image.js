const targets = document.querySelectorAll('.zoom-target');
const overlay = document.getElementById('zoom-overlay');

targets.forEach(target => {
  target.addEventListener('click', () => {
    target.classList.toggle('is-expanded');
    overlay.classList.toggle('is-show');
  });
});

// 背景（黒い幕）をタップしても元に戻るようにする
overlay.addEventListener('click', () => {
  targets.forEach(target => target.classList.remove('is-expanded'));
  overlay.classList.remove('is-show');
});
