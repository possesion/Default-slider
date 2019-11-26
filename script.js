let image = document.querySelectorAll('.item'),
    prev = document.querySelector('#prev'),
    next = document.querySelector('#next'),
    dotArea = document.querySelector('.dots-wrapper'),
    dot = document.querySelectorAll('.dot'),
    slideIndex = 1;

showSlides();
function showSlides(n) {
    if (n < 1) {
        slideIndex = image.length;
    } else if (n > image.length) {
        slideIndex = 1;
    }
    image.forEach((item) => item.style.display = 'none');
    dot.forEach((item) => item.classList.remove('is-active'));
    image[slideIndex - 1].style.display = 'block';
    dot[slideIndex - 1].classList.add('is-active');

}
function slidePlus(n) {
    showSlides(slideIndex += n);
}

prev.onclick = () => slidePlus(-1);
next.onclick = () => slidePlus(1);

let dotSwitch = (n) => showSlides(slideIndex = n);


dotArea.addEventListener('click', function(e) {
    for (let i = 0; i < dot.length + 1; i++) {
        if (e.target.classList.contains('dot') && e.target == dot [i - 1]) {
            dotSwitch(i);
        }
    }
});