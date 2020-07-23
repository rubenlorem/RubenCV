window.addEventListener('load', () => {
    setTimeout(function(){ 
        alert("Web tributo a la protectora las muy perras www.lasmuyperras.com"); 
    }, 1000);

})
/*const flechaI = document.getElementById('flecha--I');
const flechaD = document.getElementById('flecha--D');*/

/*Menu responsive*/
const navul = document.getElementById('navul'),
      menu = document.getElementById('menu'),
      cierre = document.getElementById('cierre');

menu.addEventListener('click', () =>{
   navul.classList.toggle('menuresponsive');
})
cierre.addEventListener('click', () =>{
    contenedor.classList.remove('visible');
})
/* montrar imagen en grande*/
const wrapper = document.getElementById('wrapper'),
      contenedor = document.getElementById('contenedor');

wrapper.addEventListener('click', e =>{
    const t = e.target,    
          imagenes = Array.from(wrapper.querySelectorAll('img')),
          i = imagenes.indexOf(t);
    let n = i + 1;
    let url = `url("./img/${n}.jpg")`;
    if (n >= 1){
        contenedor.classList.add('visible');
        contenedor.style.backgroundImage = url;
    }
})
/*
flechaD.addEventListener('click', e =>{
    console.log('Derecha');
    let n = i + 1;
    let url = `url("./img/${n}.jpg")`;
    if (n >= 1){
        contenedor.classList.add('visible');
        contenedor.style.backgroundImage = url;
        console.log(url);
    }
})
flechaI.addEventListener('click', () =>{
    console.log('Izquierda');
})*/