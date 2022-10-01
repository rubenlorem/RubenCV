/* efecto de bajar h1*/
const titulo = document.getElementById('titulo');
  titulo.classList.add('bajar');
/*Menu responsive*/
const burger = document.getElementById('burger'),
 nav__ul = document.getElementById('nav__ul'),
 burger__limedio = document.getElementById('burger__limedio'),
 burger__li1 = document.getElementById('burger__li1');
 

 burger.addEventListener('click', () =>{
 nav__ul.classList.toggle('desplegable');
 burger__limedio.classList.toggle('oculto');
 burger__li1.classList.toggle('giro');
 burger__li2.classList.toggle('giro2');

 if(nav__ul.classList.contains('desplegable')){
 document.getElementById("burger").src="img/menux.svg";
 } else{
    document.getElementById("burger").src="img/menu.svg";
 } 
})

/*ajustar menu a la resolución de la pantalla sin refrescar*/
addEventListener("resize", e =>{
   if(e.target.innerWidth >= 768){
      nav__ul.classList.remove('desplegable');
   }
})

/*Enlaces web*/
const grid1 = document.getElementsByClassName('grid1'),
      grid2 = document.getElementsByClassName('grid2'),
      grid3 = document.getElementsByClassName('grid3'),
      grid4 = document.getElementsByClassName('grid4'),
      grid5 = document.getElementsByClassName('grid5'),
      grid6 = document.getElementsByClassName('grid6');

grid1[0].addEventListener('click',() =>{
    window.open('https://rubenlorem.github.io/RubenCV/anton/', '_blank');
})
grid2[0].addEventListener('click',() =>{
    window.open('https://rubenlorem.github.io/RubenCV/mousemove/', '_blank');
})
grid3[0].addEventListener('click',() =>{
    window.open('https://rubenlorem.github.io/RubenCV/grid/', '_blank');
})
grid4[0].addEventListener('click',() =>{
    window.open('https://rubenlorem.github.io/RubenCV/axis/', '_blank');
})
grid5[0].addEventListener('click',() =>{
    window.open('https://rubenlorem.github.io/RubenCV/corp/', '_blank');
}) 
grid6[0].addEventListener('click',() =>{
    window.open('https://rubenlorem.github.io/RubenCV/designer/', '_blank');
})

/*Botones galeia*/
/*
const otro = document.getElementsByClassName('otro'),
cor = document.getElementsByClassName('cor'),
cv = document.getElementsByClassName('cv');

btn1.addEventListener('click', function() {
  console.log(getInput())
});
btn2.addEventListener('click', function() {
  console.log(getInput2())
});
btn3.addEventListener('click', function() {
  console.log(getInput3())
});

function getInput() {
  btn1.classList.add('seleccionado');
  btn2.classList.remove('seleccionado');
  btn3.classList.remove('seleccionado');
  for(i=0; i < cor.length ; i++){
    cor[i].classList.add('oscurecido');
  }
for(i=0; i < cv.length ; i++){
   cv[i].classList.remove('oscurecido');
}
for(i=0; i < otro.length ; i++){
 otro[i].classList.add('oscurecido');
}
}
function getInput2() {
  btn1.classList.remove('seleccionado');
  btn2.classList.add('seleccionado');
  btn3.classList.remove('seleccionado');
  for(i=0; i < cor.length ; i++){
    cor[i].classList.remove('oscurecido');
  }
for(i=0; i < cv.length ; i++){
   cv[i].classList.add('oscurecido');
}
for(i=0; i < otro.length ; i++){
 otro[i].classList.add('oscurecido');
}
}
function getInput3() {
  btn1.classList.remove('seleccionado');
  btn2.classList.remove('seleccionado');
  btn3.classList.add('seleccionado');
  for(i=0; i < cor.length ; i++){
    cor[i].classList.add('oscurecido');
  }
for(i=0; i < cv.length ; i++){
   cv[i].classList.add('oscurecido');
}
for(i=0; i < otro.length ; i++){
 otro[i].classList.remove('oscurecido');
}
}*/
const otro = document.getElementsByClassName('otro'),
cor = document.getElementsByClassName('cor'),
cv = document.getElementsByClassName('cv');

btn1.addEventListener('click', function() {
  btn1.classList.add('seleccionado');
  btn2.classList.remove('seleccionado');
  btn3.classList.remove('seleccionado');
  for(i=0; i < cor.length ; i++){
    cor[i].classList.add('oscurecido');
  }
for(i=0; i < cv.length ; i++){
   cv[i].classList.remove('oscurecido');
}
for(i=0; i < otro.length ; i++){
 otro[i].classList.add('oscurecido');
}
});
btn2.addEventListener('click', function() {
  btn1.classList.remove('seleccionado');
  btn2.classList.add('seleccionado');
  btn3.classList.remove('seleccionado');
  for(i=0; i < cor.length ; i++){
    cor[i].classList.remove('oscurecido');
  }
for(i=0; i < cv.length ; i++){
   cv[i].classList.add('oscurecido');
}
for(i=0; i < otro.length ; i++){
 otro[i].classList.add('oscurecido');
}
});
btn3.addEventListener('click', function() {
  btn1.classList.remove('seleccionado');
  btn2.classList.remove('seleccionado');
  btn3.classList.add('seleccionado');
  for(i=0; i < cor.length ; i++){
    cor[i].classList.add('oscurecido');
  }
for(i=0; i < cv.length ; i++){
   cv[i].classList.add('oscurecido');
}
for(i=0; i < otro.length ; i++){
 otro[i].classList.remove('oscurecido');
}
});
