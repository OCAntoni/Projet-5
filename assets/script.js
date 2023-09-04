const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");
const point = document.querySelector(".dot");
const img = document.querySelector(".banner-img");
const txt = document.querySelector(".img-txt");

let positionSlide =0;

console.log(left, right, point, img, txt);

left.addEventListener("click",() => {
	if (slides == 0) {
		slides = -1 } 
		img.src = slides[positionSlide].image;
		point.classList.add("dot_selected");
});

right.addEventListener("click",() => {
	if (slides == 0) {
	slides =  +1 }
	img.src = slides[positionSlide].image;
	point.classList.add("dot_selected");
});