let searchInput = document.querySelector('.search-input');
let searchIcon = document.querySelector('.search-icon');
let searchBtn = document.querySelector('.search-btn');
let burger = document.querySelector('.burger');
let menuId = document.querySelector('#menuId');
let body = document.querySelector('body');
let navbarLink = document.querySelectorAll('.navbar-link');

// Scroll navbar
$(window).on('scroll load', function () {
  if ($('.top-search').offset().top > 200) {
    $('.search-nav__links').addClass('show-search-nav__links');
  } else {
    $('.search-nav__links').removeClass('show-search-nav__links');
  }
});

searchIcon.addEventListener('click', function () {
  searchInput.classList.toggle('display-searchForm');
  searchBtn.classList.toggle('display-searchBtn');
});

// navbar links

navbarLink.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    menuId.classList.remove('toggleMenu');
    body.classList.remove('overflow-toggle');
  });
});

// Burger menu

burger.addEventListener('click', function () {
  menuId.classList.toggle('toggleMenu');
  body.classList.toggle('overflow-toggle');
});
