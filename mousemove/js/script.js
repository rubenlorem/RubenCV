// console.log(`hi`);
const header = document.getElementById('header'),
    div = document.getElementById('header__div'),
    copy = document.getElementById('copy'),
    uno = document.getElementById('uno'),
    dos = document.getElementById('dos'),
    tres = document.getElementById('tres'),
    cuatro = document.getElementById('cuatro'),
    btn = document.getElementById('btn'),
    body = document.getElementById('body'),
    amarillo = "#94861f",
    verde = "#3ad63a",
    rojo = "#843241",
    azul = "#12adbd",
    copy1 = document.getElementById('copy1'),
    copy2 = document.getElementById('copy2'),
    copy3 = document.getElementById('copy3');

header.addEventListener('mousemove', (e) => {
    let xpos = e.pageX;
    let ypos = e.pageY
 //div.style.transform = `rotate3d(${ypos*0.07},${xpos*0.01},0,-20deg)`;
 div.style.transform = `perspective(600px) rotateX(${xpos/160}deg) rotateY(${ypos/80}deg)`;
 //https://www.youtube.com/watch?v=ds8ymUkqvmo
// div.style.transform = `skew(${ypos*0,5}deg ,${xpos*0,5}deg)`;
 //  div.style.transform = `rotateY(${xpos/20}deg)`;
 //div.style.transform = `translateZ(${xpos}px)`;
 //transform: translateZ(50px);
// div.style.transform = `translate(${ypos/5}px,${xpos/5}px)`
  })
uno.addEventListener('click',() =>{
 copy.style.display = `flex`;
 body.style.backgroundImage = "url('img/fondo.jpg')";
 div.style.borderColor = `${amarillo}`;
 div.style.boxShadow = `0px 0px 30px 0px rgb(255 228 32)`;
 btn.style.borderColor = `${amarillo}`;
 btn.style.boxShadow = `0px 0px 15px 0px rgb(255 228 32)`;
 copy1.style.display = "block";
 copy1.innerHTML = "Impulsamos empresas, creando proyectos creativos";
 copy2.innerHTML = "";
 copy3.innerHTML = "";
})
dos.addEventListener('click',() =>{
  copy.style.display = `flex`;
  body.style.backgroundImage = "url('img/fondo2.jpg')";
  div.style.borderColor = `${verde}`;
  div.style.boxShadow = `0px 0px 30px 0px rgb(58 214 58)`;
  btn.style.borderColor = `${verde}`;
  btn.style.boxShadow = `0px 0px 15px 0px rgb(58 214 58)`;
  copy1.style.display = "block";
  copy1.innerHTML = "Branding e identidad";
  copy2.style.display = "block";
  copy2.innerHTML = "Publicidad";
  copy3.style.display = "block";
  copy3.innerHTML = "Fotografía y vídeo";
 })
tres.addEventListener('click',() =>{
  copy.style.display = `flex`;
  body.style.backgroundImage = "url('img/fondo3.jpg')";
  div.style.borderColor = `${azul}`;
  div.style.boxShadow = `0px 0px 30px 0px rgb(32 162 255)`;
  btn.style.borderColor = `${azul}`;
  btn.style.boxShadow = `0px 0px 15px 0px rgb(32 162 255)`;
  copy1.style.display = "block";
  copy1.innerHTML = "Contacto: C/ Guadalajara 17 email: prueba@email.com";
  copy2.style.display = "block";
  copy2.innerHTML = "";
  copy3.style.display = "block";
  copy3.innerHTML = "";
 })
cuatro.addEventListener('click',() =>{
  copy.style.display = `flex`;
  body.style.backgroundImage = "url('img/fondo4.jpg')";
  div.style.borderColor = `${rojo}`;
  div.style.boxShadow = `0px 0px 30px 0px rgb(132 50 65)`;
  btn.style.borderColor = `${rojo}`;
  btn.style.boxShadow = `0px 0px 15px 0px rgb(132 50 65)`;
  copy1.style.display = "block";
  copy1.innerHTML = "Portafolio";
  copy2.style.display = "block";
  copy2.innerHTML = "Nuestra redes sociales";
  copy3.style.display = "block";
  copy3.innerHTML = "";
 })
 btn.addEventListener('click',() =>{
  copy1.style.display = "block";
  copy1.innerHTML = "Contacto: C/ Guadalajara 17 email: prueba@email.com";
  copy2.style.display = "block";
  copy2.innerHTML = "";
  copy3.style.display = "block";
  copy3.innerHTML = "";
 })
/*div.addEventListener('mousemove', () => {
    //console.log('me nuevo en el div');
})*/