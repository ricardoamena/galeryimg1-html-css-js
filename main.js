const fullImgBox = document.querySelector('.full-img');
const fullImg = document.getElementById('full-img');

function closeImg () {
    fullImgBox.style.display = 'none';
}

function openFullImg (src) {
    fullImgBox.style.display = 'flex';
    fullImg.src = src;
}

