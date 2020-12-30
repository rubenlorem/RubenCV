/* efecto de bajar h1*/
const titulo = document.getElementById('titulo');
  titulo.classList.add('bajar');
/*Menu responsive*/
const burger = document.getElementById('burger'),
 nav__ul = document.getElementById('nav__ul');

 burger.addEventListener('click', () =>{
 nav__ul.classList.toggle('desplegable');

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
    window.open('https://rubenlorem.github.io/RubenCV/educa/', '_blank');
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
const otro = document.getElementsByClassName('otro'),
cor = document.getElementsByClassName('cor'),
cv = document.getElementsByClassName('cv');


btn1.addEventListener('mouseover',() =>{
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
})
btn2.addEventListener('mouseover',() =>{
    btn2.classList.add('seleccionado');
    btn1.classList.remove('seleccionado');
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
})
btn3.addEventListener('mouseover',() =>{
    btn3.classList.add('seleccionado');
    btn1.classList.remove('seleccionado');
    btn2.classList.remove('seleccionado');
        for(i=0; i < cor.length ; i++){
            cor[i].classList.add('oscurecido');
          }
        for(i=0; i < cv.length ; i++){
           cv[i].classList.add('oscurecido');
       }
       for(i=0; i < otro.length ; i++){
         otro[i].classList.remove('oscurecido');
       }
})
