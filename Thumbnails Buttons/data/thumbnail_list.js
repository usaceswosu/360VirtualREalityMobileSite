const thumbnails = imageList.map(name => {
  const safeSrc = "images/" + encodeURIComponent(name);
  return {
    name: name.replace(".png", ""),
    src: safeSrc,
    action: () => alert(`${name} clicked!`)
  };
});

const container = document.querySelector('.thumb-grid');

thumbnails.forEach(item => {
  const btn = document.createElement('button');
  btn.className = 'thumb-btn';
  btn.innerHTML = `<img src="${item.src}" alt="${item.name}">`;
  btn.onclick = item.action;
  container.appendChild(btn);
});
