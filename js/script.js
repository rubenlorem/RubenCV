/* efecto de bajar h1*/
const titulo = document.getElementById('titulo');
window.addEventListener('load', () =>{
  titulo.classList.add('bajar');
})
/*Menu responsive*/
const burger = document.getElementById('burger'),
 nav__ul = document.getElementById('nav__ul');

burger.addEventListener('click', () =>{
 nav__ul.classList.toggle('desplegable');
})
/*refrecar web*/
window.addEventListener("resize", myFunction);
function myFunction() {
    window.location.reload(true);
}
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
