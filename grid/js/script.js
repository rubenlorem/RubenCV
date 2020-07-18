setTimeout(function(){ 
    alert("Web tributo a la protectora las muy perras www.lasmuyperras.com"); 
}, 1000);

const i = document.getElementById('1');
const ii = document.getElementById('2');
const iii = document.getElementById('3');
const iv = document.getElementById('4');
const v = document.getElementById('5');
const vi = document.getElementById('6');
const vii = document.getElementById('7');
const viii = document.getElementById('8');
const ix = document.getElementById('9');
const x = document.getElementById('10');
const xi = document.getElementById('11');
const xii = document.getElementById('12');
const xiii = document.getElementById('13');
const xiv = document.getElementById('14');
const xv = document.getElementById('15');
const xvi = document.getElementById('16');
const xvii = document.getElementById('17');
const contenedor = document.getElementById('contenedor');
const cierre = document.getElementById('cierre');
const flechaI = document.getElementById('flecha--I');
const flechaD = document.getElementById('flecha--D');
const menu = document.getElementById('menu');
const navul = document.getElementById('navul');

menu.addEventListener('click', () =>{
   navul.classList.toggle('menuresponsive');
})

cierre.addEventListener('click', () =>{
    contenedor.classList.remove('visible');
})
/*
flechaD.addEventListener('click', () =>{
    /*console.log('Derecha');*/
  /* for(i=o; i<1, i++){
    let url = contenedor.style.backgroundImage = "url('./img/1.jpg')";*/
/*
    let url = contenedor.style.backgroundImage;
    let numero = url.substring(11,12);
    let incremento = parseInt(numero) + 1;
    let paco = contenedor.style.backgroundImage = `url('./img/${incremento}.jpg')`;
    console.log(paco);
    console.log(numero);
    console.log(incremento);
})

flechaI.addEventListener('click', () =>{
    let url = contenedor.style.backgroundImage;
    let numero = url.substring(11,12);
    if(numero == contenedor.style.backgroundImage.substring(11,12)){
        let numero = 17;
        let incremento = parseInt(numero) - 1;
        let paco = contenedor.style.backgroundImage = `url('./img/${incremento}.jpg')`;
        console.log(paco);
    }else{
        let incremento = parseInt(numero) - 1;
        let paco = contenedor.style.backgroundImage = `url('./img/${incremento}.jpg')`;
        console.log(paco);
    }*/

    /*if(incremento == 0){
        incremento = 17;
        incremento = parseInt(incremento) - 1;
    }*/
   /*console.log(paco);
    console.log(numero);
    console.log(incremento);
})*/

i.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/1.jpg')";
})

ii.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/2.jpg')";
})
iii.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/3.jpg')";
})
iv.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/4.jpg')";
})
v.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/5.jpg')";
})
vi.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/6.jpg')";
})
vii.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/7.jpg')";
})
viii.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/8.jpg')";
})
ix.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/9.jpg')";
})
x.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/10.jpg')";
})
xi.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/11.jpg')";
})
xii.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/12.jpg')";
})
xiii.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/13.jpg')";
})
xiv.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/14.jpg')";
})
xv.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/15.jpg')";
})
xvi.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/16.jpg')";
})
xvii.addEventListener('click', () =>{
    contenedor.classList.add('visible');
    contenedor.style.backgroundImage = "url('./img/17.jpg')";
})
