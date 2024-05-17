//popup logic
const tenis1 = document.getElementById('contenedor-1');
const tenis2 = document.getElementById('contenedor-2');
const tenis3 = document.getElementById('contenedor-3');

const popup1 = document.getElementById('popup-1');
const popup2 = document.getElementById('popup-2');
const popup3 = document.getElementById('popup-3');

tenis1.addEventListener('click', function () {
    popup1.style.display = 'block';
});

tenis2.addEventListener('click', function () {
    popup2.style.display = 'block';
});

tenis3.addEventListener('click', function () {
    popup3.style.display = 'block';
});


//close popup
popup1.addEventListener('click', function () {
    popup1.style.display = 'none';
});

popup2.addEventListener('click', function () {
    popup2.style.display = 'none';
});

popup3.addEventListener('click', function () {
    popup3.style.display = 'none';
});

