/* efecto de bajar h1*/
const titulo = document.getElementById('titulo');
  titulo.classList.add('bajar');
/*Menu responsive*/
const burger = document.getElementById('burger'),
 nav__ul = document.getElementById('nav__ul');

burger.addEventListener('click', () =>{
 nav__ul.classList.toggle('desplegable');
})
/*ajustar menu a la resolución de la pantalla sin refrescar*/
addEventListener("resize", e =>{
   if(e.target.innerWidth >= 768){
      nav__ul.classList.remove('desplegable');
   }
})
/*refrecar web
   window.addEventListener("resize", myFunction);
    function myFunction() {
        window.location.reload(true);
    }*/
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
    window.open('https://rubenlorem.github.io/RubenCV/designer/', '_blank');
})
grid6[0].addEventListener('click',() =>{
    window.open('https://rubenlorem.github.io/RubenCV/corp/', '_blank');
})

/*Efecto portafolio*/
const btn1 = document.getElementById('btn1'),
 btn2 = document.getElementById('btn2'),
 btn3 = document.getElementById('btn3'),
 cv = document.getElementsByClassName('cv'),
 cor = document.getElementsByClassName('cor'),
otro = document.getElementsByClassName('otro');

btn1.addEventListener('click',() =>{
  for(i=0; i < cv.length ; i++){
      cv[i].classList.remove('seleccionado');
  }
  for(i=0; i < cor.length ; i++){
    cor[i].classList.add('seleccionado');
}
for(i=0; i < otro.length ; i++){
    otro[i].classList.add('seleccionado');
}
})
btn2.addEventListener('click',() =>{
    for(i=0; i < cor.length ; i++){
        cor[i].classList.remove('seleccionado');
    }
    for(i=0; i < cv.length ; i++){
        cv[i].classList.add('seleccionado');
    }
    for(i=0; i < otro.length ; i++){
        otro[i].classList.add('seleccionado');
    }
})
btn3.addEventListener('click',() =>{
    for(i=0; i < otro.length ; i++){
        otro[i].classList.remove('seleccionado');
    }
    for(i=0; i < cv.length ; i++){
        cv[i].classList.add('seleccionado');
    }
    for(i=0; i < cor.length ; i++){
        cor[i].classList.add('seleccionado');
    }
})
