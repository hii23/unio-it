// BURGER

const body = document.querySelector("body");
const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__burger-menu");

const toggleMenu = () => {
	if (burger.classList.contains("header__burger_active")) {
		body.style.overflow = "auto";
		burger.classList.remove("header__burger_active");
		burgerMenu.classList.remove("header__burger-menu_active");
	} else {
		body.style.overflow = "hidden";
		burger.classList.add("header__burger_active");
		burgerMenu.classList.add("header__burger-menu_active");
	}
};
burger.addEventListener("click", toggleMenu);

var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-next",
		prevEl: ".swiper-prev",
	},
	spaceBetween: 48,
	slidesPerView: "auto",
});
