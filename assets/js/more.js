const frameZero = '0 0 126 177.23';
const frameOne = '159 4 126 177.23';
const frameTwo = '319 4 126 177.23';
const frameThree = '480 4 126 177.233';
const groot = document.querySelector('#i-am-groot');
let num = 0;

setInterval(function(){
  let frame;
  if(num === 0) {
    frame = frameZero;
  } else if(num === 1) {
    frame = frameOne;
  } else if(num === 2) {
    frame = frameTwo;
  } else if(num === 3) {
    frame = frameThree;
  }
  groot.setAttribute("viewBox", frame);
  num++
  if(num > 3) num = 0;
}, 200);
