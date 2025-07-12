const input = document.getElementById("num");
const toF = document.getElementById("tof");
const toC = document.getElementById("toc");
const result = document.getElementById("result");
const btn = document.getElementById("btn");
let temp ;

btn.onclick = function () {
  if ((toF.checked)&&(toC.checked)) {result.textContent = "choose one unit !"} 
  else  if (toF.checked) {
    temp = input.value ; 
    result.textContent = ((temp * 1.8) +32).toFixed(1) + " F°" ;

  } else if (toC.checked) {
    temp = input.value ;
    result.textContent = ((temp - 32) * 5/9).toFixed(1)+ " C°" ;
  }
  
};
