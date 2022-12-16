let num1;
let num2;
const displayCurrent=document.querySelector(".displayCurrent");
const displayPrevious=document.querySelector(".displayPrevious");
const buttons=Array.from((document.querySelectorAll("button")));
buttons.forEach(button =>{
    button.addEventListener("click",(e)=>{  
    switch (e.target.innerHTML) {
        case "C":
        displayCurrent.innerHTML="0";
        displayPrevious.innerHTML="";
        break;
        case "CE":
            if(displayPrevious.innerHTML.length<=1 && displayCurrent.innerHTML.length==1){
                displayCurrent.innerHTML="0";
                displayPrevious.innerHTML="";
                break;
            }
            else if(displayCurrent.innerHTML.length>=2 && displayPrevious.innerHTML.length==0){
                displayCurrent.innerHTML=displayCurrent.innerHTML.slice(0,-1);
                break;
            }
            else if(displayPrevious.innerHTML.length==2 && (displayPrevious.innerHTML.includes("+")|| displayPrevious.innerHTML.includes("-") || displayPrevious.innerHTML.includes("*")||displayPrevious.innerHTML.includes("/"))){
                displayCurrent.innerHTML="0";
                displayPrevious.innerHTML="";
                break;
            }
            else{   
            if(displayPrevious.innerHTML.includes("+")|| displayPrevious.innerHTML.includes("-") || displayPrevious.innerHTML.includes("*")||displayPrevious.innerHTML.includes("/")){
                a=displayCurrent.innerHTML.charAt(displayCurrent.innerHTML.length-1)
                displayCurrent.innerHTML=displayCurrent.innerHTML.slice(0,-2);
                displayCurrent.innerHTML+=a;
                displayPrevious.innerHTML=displayPrevious.innerHTML.slice(0,-2);
                displayPrevious.innerHTML+=a;
                break;
            }
             else{
                displayPrevious.innerHTML=displayPrevious.innerHTML.slice(0,-1);
                displayCurrent.innerHTML=displayCurrent.innerHTML.slice(0,-1);
                break;
             }
             }
         case ".":
            if(displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="."){
                break;
            }
            else{
                displayCurrent.innerHTML+=e.target.innerHTML;
                break;
            }
            case "0":
                if(displayCurrent.innerHTML=="0"){
                    break;
                }
                else{
                    displayCurrent.innerHTML+=e.target.innerHTML;
                    break;
                }
            case "00":
                if(displayCurrent.innerHTML=="0"){
                    break;
                }
                else{
                    displayCurrent.innerHTML+=e.target.innerHTML;
                    break;
                }
            case "/":
                if(displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="/"){
                    break;
                }
                else if(displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="+" || displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="-" || displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="*" ){
                    displayCurrent.innerHTML=displayCurrent.innerHTML.slice(0,-1);
                    displayCurrent.innerHTML+=e.target.innerHTML; 
                    displayPrevious.innerHTML=displayPrevious.innerHTML.slice(0,-1);
                        displayPrevious.innerHTML+=e.target.innerHTML;
                    break;
                }
                else{
                    if(displayPrevious.innerHTML.includes("+")|| displayPrevious.innerHTML.includes("-") || displayPrevious.innerHTML.includes("*")||displayPrevious.innerHTML.includes("/")){
                        displayPrevious.innerHTML+=displayCurrent.innerHTML;
                        displayCurrent.innerHTML=math(displayPrevious);
                        displayPrevious.innerHTML=displayCurrent.innerHTML;
                        displayPrevious.innerHTML+=e.target.innerHTML;
                        displayCurrent.innerHTML+=e.target.innerHTML;
                       break;
                    }
                    else{
                        displayPrevious.innerHTML=displayCurrent.innerHTML; 
                        displayPrevious.innerHTML+=e.target.innerHTML;
                        displayCurrent.innerHTML+=e.target.innerHTML;
                        break; 
                    }
                }
                case "*":
                    if(displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="*"){
                        break;
                    }
                    else if(displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="+" || displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="-" || displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="/" ){
                        displayCurrent.innerHTML=displayCurrent.innerHTML.slice(0,-1);
                        displayCurrent.innerHTML+=e.target.innerHTML; 
                        displayPrevious.innerHTML=displayPrevious.innerHTML.slice(0,-1);
                        displayPrevious.innerHTML+=e.target.innerHTML;
                        break;
                    }
                    else{
                        if(displayPrevious.innerHTML.includes("+")||( displayPrevious.innerHTML.includes("-") && displayPrevious.innerHTML.charAt((displayPrevious.innerHTML.length)-1)=="-") || displayPrevious.innerHTML.includes("*")||displayPrevious.innerHTML.includes("/")) {
                            displayPrevious.innerHTML+=displayCurrent.innerHTML;
                            displayCurrent.innerHTML=math(displayPrevious);
                            displayPrevious.innerHTML=displayCurrent.innerHTML;
                            displayPrevious.innerHTML+=e.target.innerHTML;
                            displayCurrent.innerHTML+=e.target.innerHTML;
                           break;
                        }
                        else{
                            displayPrevious.innerHTML=displayCurrent.innerHTML; 
                            displayPrevious.innerHTML+=e.target.innerHTML;
                            displayCurrent.innerHTML+=e.target.innerHTML;
                            break; 
                        }
                    }
                    case "-":
                        if(displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="-"){
                            break;
                        }
                        else if(displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="+" || displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="*" || displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="/" ){
                            displayCurrent.innerHTML=displayCurrent.innerHTML.slice(0,-1);
                            displayCurrent.innerHTML+=e.target.innerHTML; 
                            displayPrevious.innerHTML=displayPrevious.innerHTML.slice(0,-1);
                        displayPrevious.innerHTML+=e.target.innerHTML;
                            break;
                        }
                        else{
                            if(displayPrevious.innerHTML.includes("+")|| displayPrevious.innerHTML.includes("-") || displayPrevious.innerHTML.includes("*")||displayPrevious.innerHTML.includes("/")){
                                displayPrevious.innerHTML+=displayCurrent.innerHTML;
                                displayCurrent.innerHTML=math(displayPrevious);
                                displayPrevious.innerHTML=displayCurrent.innerHTML;
                                displayPrevious.innerHTML+=e.target.innerHTML;
                                displayCurrent.innerHTML+=e.target.innerHTML;
                               break;
                            }
                            else{
                                displayPrevious.innerHTML=displayCurrent.innerHTML; 
                                displayPrevious.innerHTML+=e.target.innerHTML;
                                displayCurrent.innerHTML+=e.target.innerHTML;
                                break; 
                            } 
                        }
                        case "+":
                            if(displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="+"){
                                break;
                            }
                            else if(displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="-" || displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="*" || displayCurrent.innerHTML.charAt((displayCurrent.innerHTML.length)-1)=="/" ){
                                displayCurrent.innerHTML=displayCurrent.innerHTML.slice(0,-1);
                                displayCurrent.innerHTML+=e.target.innerHTML;
                                displayPrevious.innerHTML=displayPrevious.innerHTML.slice(0,-1);
                                displayPrevious.innerHTML+=e.target.innerHTML; 
                                break;
                            }
                            else{
                                if(displayPrevious.innerHTML.charAt(displayPrevious.innerHTML.length-1).includes("+")|| displayPrevious.innerHTML.charAt(displayPrevious.innerHTML.length-1).includes("-") || displayPrevious.innerHTML.charAt(displayPrevious.innerHTML.length-1).includes("*")||displayPrevious.innerHTML.charAt(displayPrevious.innerHTML.length-1).includes("/")){
                                    displayPrevious.innerHTML+=displayCurrent.innerHTML;
                                    displayCurrent.innerHTML=math(displayPrevious);
                                    displayPrevious.innerHTML=displayCurrent.innerHTML;
                                    displayPrevious.innerHTML+=e.target.innerHTML;
                                    displayCurrent.innerHTML+=e.target.innerHTML;
                                   break;
                                }
                                else{
                                    displayPrevious.innerHTML=displayCurrent.innerHTML; 
                                    displayPrevious.innerHTML+=e.target.innerHTML;
                                    displayCurrent.innerHTML+=e.target.innerHTML;
                                    break; 
                                }
                            }

                            case "=":
                             if(displayCurrent.innerHTML=="0"){
                                break;
                             }                                               
                             else{
                                if(displayPrevious.innerHTML.includes("+")===false && displayPrevious.innerHTML.includes("-")===false && displayPrevious.innerHTML.includes("*")===false && displayPrevious.innerHTML.includes("/")===false){
                                    displayCurrent.innerHTML=math(displayPrevious);
                                    displayPrevious.innerHTML=displayCurrent.innerHTML;
                                    break;
                                }
                                else{
                                    displayPrevious.innerHTML+=displayCurrent.innerHTML;
                                    displayCurrent.innerHTML=math(displayPrevious);
                                    displayPrevious.innerHTML=displayCurrent.innerHTML;
                                    break;
                                }
                             }
            default:
            if(displayCurrent.innerHTML==="0"){ 
                displayCurrent.innerHTML="";
                displayCurrent.innerHTML+=e.target.innerHTML;
            }
            else if( displayCurrent.innerHTML.includes("+") || displayCurrent.innerHTML.includes("-") || displayCurrent.innerHTML.includes("*") || displayCurrent.innerHTML.includes("/")){ 
              displayCurrent.innerHTML="";
              displayCurrent.innerHTML+=e.target.innerHTML;
        }
            else 
                displayCurrent.innerHTML+=e.target.innerHTML;     
    }  
    });
});
function math(displayPrevious){
    if(displayPrevious.innerHTML.includes("+")&& displayPrevious.innerHTML.length!==1){
         let b=displayPrevious.innerHTML.indexOf("+");
         num1=displayPrevious.innerHTML.slice(0,b);
         num2=displayPrevious.innerHTML.slice(b+1,displayPrevious.innerHTML.length);
         num1=parseFloat(num1);
         num2=parseFloat(num2);
         return add(num1,num2);
    }
    else if(displayPrevious.innerHTML.includes("-")&& displayPrevious.innerHTML.length!==1 ){
        let b=displayPrevious.innerHTML.indexOf("-");
        num1=displayPrevious.innerHTML.slice(0,b);
        num2=displayPrevious.innerHTML.slice(b+1,displayPrevious.innerHTML.length);
        num1=parseFloat(num1);
        num2=parseFloat(num2);
       return sub(num1,num2);
   }
   else if(displayPrevious.innerHTML.includes("*")&& displayPrevious.innerHTML.length!==1){
    let b=displayPrevious.innerHTML.indexOf("*");
    num1=displayPrevious.innerHTML.slice(0,b);
    num2=displayPrevious.innerHTML.slice(b+1,displayPrevious.innerHTML.length);
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    return mul(num1,num2);
  }
  else if(displayPrevious.innerHTML.includes("/")&& displayPrevious.innerHTML.length!==1){
    let b=displayPrevious.innerHTML.indexOf("/");
    num1=displayPrevious.innerHTML.slice(0,b);
    num2=displayPrevious.innerHTML.slice(b+1,displayPrevious.innerHTML.length);
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    return div(num1,num2);
}
   else if(displayPrevious.innerHTML.includes("+")===false && displayPrevious.innerHTML.includes("-")===false && displayPrevious.innerHTML.includes("*")===false && displayPrevious.innerHTML.includes("/")===false){
   num1=displayPrevious.innerHTML;
   return add(num1,0);
   }  
}
function add(num1,num2){
    let a= num1+num2;
    let int=parseInt(a);
    let fl=parseFloat(a);
    let rounded = parseFloat(a.toFixed(4));
    if(int===fl){
        return a;
    }
    return rounded;
}
function sub(num1,num2){
    let a= (num1)-(num2);
    let int=parseInt(a);
    let fl=parseFloat(a);
    let rounded = parseFloat(a.toFixed(4));
    if(int===fl){
        return a;
    }
    return rounded;
}
function mul(num1,num2){
    let a= num1*num2;
    let int=parseInt(a);
    let fl=parseFloat(a);
    let rounded= parseFloat(a.toFixed(4));
    if(int===fl){
        return a;
    }
    return rounded;
}
function div(num1,num2){
    let a=num1/num2;
    let int=parseInt(a);
    let fl=parseFloat(a);
    let rounded = parseFloat(a.toFixed(4));
   
    if(num1==0 && num2==0){
        return "Undefined";
    }
    else if(int===fl){
        return a;
    }   
    return rounded;
}



