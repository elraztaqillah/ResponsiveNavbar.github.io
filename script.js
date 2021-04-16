const menuToggle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () { 
	nav.classList.toggle('slide');
});

// #Jika Menu Toogle di Klik, Jalankan function berikut ini