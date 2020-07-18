/*const burger = document.getElementById('burger');
const nav__ul = document.getElementById('nav__ul');

burger.addEventListener('click', () =>{
 nav__ul.classList.toggle('desplegable');
 console.log("biennn");
})

*/


/*
 const boton = document.getElementById('boton');
 const titulo = document.getElementById('titulo')
boton.addEventListener('click', () => {
   titulo.classList.toggle('ps');
 })*/
 /*
 const boton = document.getElementById('boton');
 const dos = document.getElementsByTagName('h2');
boton.addEventListener('click', () =>{
    dos.classList.add('ps');
 })*/
/*
const dos = document.getElementsByTagName('h2');
boton.addEventListener('mouseleave', () =>{
    dos.classList.toggle('ps');
 })*/
 /*
 const divmio = document.getElementById('divmio');
 const boton2 = document.getElementById('boton2');
 const boton3 = document.getElementById('boton3');
 const boton4 = document.getElementById('boton4');

 boton2.addEventListener('click', () =>{
  divmio.classList.add('boton2');
  divmio.classList.remove('boton3','boton4');
 })
 boton3.addEventListener('click', () =>{
    divmio.classList.add('boton3');
  divmio.classList.remove('boton2','boton4');
   })
boton4.addEventListener('click', () =>{
    divmio.classList.add('boton4');
    divmio.classList.remove('boton3','boton2');
   })
*/
/*
   const divfoto = document.getElementById('divfoto');
   const boton20 = document.getElementById('boton20');
   const boton30 = document.getElementById('boton30');
   const boton40 = document.getElementById('boton40');

   boton20.addEventListener('click', () =>{
       divfoto.classList.add('boton20');
       divfoto.classList.remove('boton30','boton40');
   })
   boton30.addEventListener('click', () =>{
    divfoto.classList.add('boton30');
    divfoto.classList.remove('boton20','boton40');
})
boton40.addEventListener('click', () =>{
    divfoto.classList.add('boton40');
    divfoto.classList.remove('boton30','boton20');
})
*/
/*
const boton = document.getElementById('boton');
const titulo = document.getElementById('titulo')
boton.addEventListener('click',()=>{
    titulo.classList.toggle('ps');
})*/
/*
const cuadrado = document.getElementById('divmio');
cuadrado.addEventListener('mousemove',(e) =>{
    console.log(e.clientY);
})

addEventListener('click',(e) =>{
    console.log(e.clientY);
})
*/
/*
addEventListener('click',(e) =>{
   let paco = e.clientY;
    addEventListener('click',(e) =>{
     let pacomio = e.clientX;

     if(paco > pacomio){
         console.log('algo');
     } else{
        console.log('algo no');
     }
    })
})*/
/*
const divfoto = document.getElementById('divfoto');
const boton20 = document.getElementById('boton20');
const boton30 = document.getElementById('boton30');
const boton40 = document.getElementById('boton40');
const agrupar = document.getElementById('agrupar');

agrupar.addEventListener('click', (e) =>{
 e.target.classList.add('border');
})

boton20.addEventListener('click', () =>{
    divfoto.classList.add('boton20');
    divfoto.classList.remove('boton30','boton40');
})
boton30.addEventListener('click', () =>{
 divfoto.classList.add('boton30');
 divfoto.classList.remove('boton20','boton40');
})
boton40.addEventListener('click', () =>{
 divfoto.classList.add('boton40');
 divfoto.classList.remove('boton30','boton20');
})*/
const logo = document.getElementById('logo');
const menu = document.getElementsByClassName('nav__ulli');

logo.addEventListener('click', () =>{
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.toggle('visible')
      }
})