//mobile navigation
let navigation = document.querySelector('.mobile-nav');
let menuButton = document.querySelector('.hamburger-menu');
let closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', () => {
  navigation.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  navigation.style.display = 'none';
});
//mobile navigation
