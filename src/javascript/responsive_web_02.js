// Navigation Click Event

var menuButton = document.querySelector('.nav-menu-button');
var navigation = document.querySelector('.navigation');

// Menu Button EventListener

menuButton.addEventListener('click', clickMenu);

// Function clickMenu

function clickMenu() {
  navigation.classList.toggle('nav-list');
}