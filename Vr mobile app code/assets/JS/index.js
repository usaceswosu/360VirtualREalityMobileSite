//PROBABLY DONT NEED ENTIRELY
const container = document.querySelector('.thumb-grid');

thumbnails.forEach(item => {
  const btn = document.createElement('button');
  btn.className = 'thumb-btn';
  btn.innerHTML = `<img src="${item.src}" alt="${item.name}">`;

  btn.addEventListener('click', () => {
    document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    item.action();
  });

  container.appendChild(btn);
});