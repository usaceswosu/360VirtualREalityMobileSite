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



//Sky's Javascript
//Should open up youtube links when Image is clicked, javascript is fully functional - currently should be an HTML issue with attributes
                                       

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[data-link]");

    images.forEach(img => {
        img.style.cursor = "pointer";

        img.addEventListener("click", function () {
            const link = this.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        });
    });
});