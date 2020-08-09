let txt = document.querySelector('span');
let choose = document.querySelectorAll('li');
let bodyBg = document.body;
let count = 0;
let ranCol = new Array();
let rgb = new Array(3);
let btnText = new Array(3);
let bg;

choose[0].addEventListener('click',()=>{
  hexColor();
})
choose[1].addEventListener('click',()=>{
  rgbColor();
})
choose[2].addEventListener('click',()=>{
  hueColor();
})
function hexColor(){
  let hex = ['a','b','c','d','e','f'];
  hex.push(1,2,3,4,5,6,7,8,9);
  for (var i = 0; i < hex.length; i++) {
    ranCol[i] = Math.floor((Math.random()*hex.length)+0);
    bg = bodyBg.style.background = `#${hex[ranCol[5]]}${hex[ranCol[2]]}${hex[ranCol[4]]}${hex[ranCol[1]]}${hex[ranCol[0]]}${hex[ranCol[3]]}`;
    txt.textContent = `${bg.toUpperCase()}`;
  }
  return txt;
}

function rgbColor(){
  for (var i = 0; i < rgb.length; i++) {
    ranCol[i] = Math.floor((Math.random()*255)+1);
    bg = bodyBg.style.background = `rgb(${ranCol[0]},${ranCol[1]},${ranCol[2]})`;
    txt.textContent = `${bg}`;
  }
  return txt;
}

function hueColor(){
  let hue = new Array();
  let lightness = new Array;
  hue[count] = Math.floor((Math.random()*100)+1);
  lightness[count] = Math.floor((Math.random()*100)+1);
  ranCol[count] = Math.floor((Math.random()*360)+1);
  bg = bodyBg.style.background = `hsl(${ranCol[count]},${hue[count]}%,${lightness[count]}%)`;
  txt.textContent = `${bg}`;
  return txt;
}
