const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");
const point = document.querySelector(".dot");
const img = document.querySelector(".banner-img");
const txt = document.querySelector(".img-txt")

console.log(left, right, point, img, txt)

left.addEventListener("click",() => {
	if (slides == 0) {
		slides = -1 } 
		point.classList.add("dot_selected");
});

right.addEventListener("click",() => {
	if (slides == 0) {
	slides =  +1 }
	point.classList.add("dot_selected");
});