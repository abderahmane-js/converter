const input = document.getElementById("num");
const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");
const btn = document.getElementById("btn");



btn.onclick = function () { 
  const temp = Number(input.value);
  const f = from.value ;
  const t = to.value ;
 
  const key = `${f}-->${t}` ;
  
 switch(key) {
  case "f-->c":
      result.textContent = ((temp - 32) * 5/9).toFixed(1)+ "C°" ;
  break ;

  case "c-->f":
     result.textContent =((temp * 9/5)+32).toFixed(1)+ "F°" ; 
     break ; 

  case "kg-->lbs":  
    result.textContent =(temp*2.20462).toFixed(2)+"lbs" ; 
    break ;

  case "lbs-->kg":
    result.textContent =(temp/2.20462).toFixed(2)+"kg" ;
    break; 
  
  case "m-->ft":
    let total_inchs =temp * 39.3701; 
    let feet = Math.floor(total_inchs/12); 
    let inches = Math.round(total_inchs % 12);
    if (inches >= 12) {
        feet += 1;
        inches = 0; }
     result.textContent =`${feet}'${inches}` ;
   break ; 

   case "ft-->m":
    const total_inches = temp * 12;
    result.textContent =(temp*0.3048).toFixed(2) + "m";
    break;

   default : 
   result.textContent ="invalide units ";


 
    


 }
 
 
 
  
  
  
  } 


// adding soon kg to lbs , meter to feet 
  
 

