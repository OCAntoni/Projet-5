//Tableau de base avec les propriétees appliquer aux images et textes + chemin des images//
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

//Déclarations des constantes + asignations//
const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");
const point = document.querySelector(".dot");
const img = document.querySelector(".banner-img");
const txt = document.querySelector(".img-txt");

//Déclaration point de départ du tableau + point maximal du tableau//
let positionSlide = 0;
let maxLenght = 4;

//Evènement click flèche gauche//
left.addEventListener("click",() => {
	positionSlide--;
	if (positionSlide == 0) {
	positionSlide = -1 } 
	img.src = slides[positionSlide].image;
	txt.innerHTML = slides[positionSlide].tagLine;
	point.classList.add("dot_selected");
	console.log("Click on left arrow");
});

//Evènement click flèche droite//
right.addEventListener("click",() => {
	positionSlide++;
	if (positionSlide == 0) {
	positionSlide =  +1 }
	img.src = slides[positionSlide].image;
	txt.innerHTML = slides[positionSlide].tagLine;
	point.classList.add("dot_selected");
	console.log("Click on right arrow");
});

//Essai fin du diaporama//
if (positionSlide > maxLenght) {
	 positionSlide == 0;
}
//Essai retour fin du diapo//
if (positionSlide < 0) {
	positionSlide == 4;
}