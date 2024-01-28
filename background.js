var images = ["imagens/images.jpg","imagens/images2.jpg","imagens/images3.jpg","imagens/images4.jpg","imagens/images5.jpg","imagens/images6.jpg"];
var currentIndex = 0;
var timeoutId;

function changeBackground() {
    const body = document.querySelector('body');
    var btn = document.querySelector(".dark-mode-btn");
    if (body.classList.contains('dark-mode')) {
        images = ["imagens/images4.jpg", "imagens/images5.jpg","imagens/images6.jpg"];
        timeoutId = setTimeout(changeBackground, 10000);
    } else {
        images = ["imagens/images.jpg","imagens/images2.jpg","imagens/images3.jpg"];
        timeoutId = setTimeout(changeBackground, 10000);
    }
    body.style.backgroundImage = "url('" + images[currentIndex] + "')";
    currentIndex = (currentIndex + 1) % images.length;
}

window.addEventListener('load', function() {
    startTime();
    changeBackground();
});

function toggleDarkMode() {
    const body = document.querySelector('body');
    var btn = document.querySelector(".dark-mode-btn");
    body.classList.toggle('dark-mode');
    btn.classList.toggle("dark-mode");
    clearTimeout(timeoutId);
    changeBackground();
}