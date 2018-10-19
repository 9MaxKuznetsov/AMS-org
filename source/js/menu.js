var burger = document.querySelector(".menu__button");
var navigation = document.querySelector(".nav-list");

var menutoggle = function () {
  navigation.classList.toggle("nav-list--hide");
}

menutoggle();
burger.addEventListener('click', function () {
    menutoggle();
});
