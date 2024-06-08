let qnty = 0;

document.getElementById('inc').addEventListener('click', () => {
    qnty++;
    document.getElementById('qty').value = qnty;
});

document.getElementById('dec').addEventListener('click', () => {
    if (qnty > 0) {
        qnty--;
        document.getElementById('qty').value = qnty;
    }
});
//switch images on click 
function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    const element2 = mainImage.src;
    mainImage.src = element.src;
    element.src=element2;
}
