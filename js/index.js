let titulo =document.querySelector('head')
titulo.children[3].innerHTML="Movies"

let logo =document.querySelector('.logo')
logo.src="../img/cc.jpg"

let nav = document.querySelector('nav')
nav.innerHTML=`
<a> cartelera</a>
<a> Pronto</a>
<a> Cineco Aleatorioa</a>
<a>Comidas</a>

`
let input =document.querySelector('input')
input.placeholder="Buscar Pelicula"

let ciudad =document.querySelector('.ciudad')
ciudad.innerHTML="Bucaramanga"


let imagen1 = document.querySelector('.peliculas')
imagen1.children[0].children[0].src="../img/gato.jpg"
imagen1.children[0].children[1].textContent="Gato con Botas"

let imagen2 = document.querySelector('.peliculas')
imagen1.children[1].children[0].src="../img/ballena.jpg"
imagen1.children[1].children[1].textContent="La Ballena"

let imagen3 = document.querySelector('.peliculas')
imagen1.children[2].children[0].src="../img/houston.jpg"
imagen1.children[2].children[1].textContent="Withey Houston"

let imagen4 = document.querySelector('.peliculas')
imagen1.children[3].children[0].src="../img/conejo.jpg"
imagen1.children[3].children[1].textContent="Academia de Conejos"