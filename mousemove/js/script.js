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
    copy3 = document.getElementById('copy3'),
    copybtn = document.getElementById('copy__btn');
header.addEventListener('mousemove', (e) => {
    let xpos = e.pageX;
    let ypos = e.pageY
   // let ancho = screen.width;
    //let alto = screen.height;
 div.style.transform = `perspective(600px) rotateX(${xpos/160}deg) rotateY(${ypos/80}deg)`;
  })
uno.addEventListener('click',() =>{
 copy.style.display = `flex`;
 body.style.backgroundImage = "url('img/fondo.jpg')";
 if (screen.width < 900) {
 copybtn.style.display = `block`
 }
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
  if (screen.width < 900) {
    copybtn.style.display = `block`
    }
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
  if (screen.width < 900) {
    copybtn.style.display = `block`
    }
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
  if (screen.width < 900) {
    copybtn.style.display = `block`
    }
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
 copybtn.addEventListener('click', () =>{
  copy.style.display = `none`;
  copybtn.style.display = `none`;
 })
 btn.addEventListener('click',() =>{
  if (screen.width < 900) {
    copybtn.style.display = `block`
    }
  copy.style.display = `flex`;
  copy1.style.display = "block";
  copy1.innerHTML = "Contacto: C/ Guadalajara 17 email: prueba@email.com";
  copy2.style.display = "block";
  copy2.innerHTML = "";
  copy3.style.display = "block";
  copy3.innerHTML = "";
 })