function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
let math={add:add(),subtract:subtract(),multiply:multiply(),divide:divide()};
let operators={add:"+",subtract:"-",multiply:"*",divide:"/"};
function operate(operator,num1,num2){
switch (operator) {
    case operators.add:
        return math.add;
        break;
    case operators.subtract:
    return math.subtract;
    case operators.multiply:
    return math.multiply;
    case operators.divide:
    return math.divide;

    default:"Its not difined please enter another"
        break;
}
}
const button= document.querySelectorAll("button");
const buttonAdd=document.querySelector(".buttonAdd");
const buttonSub=document.querySelector(".buttonSub");
const buttonMul=document.querySelector(".buttonMul");
const buttonDiv=document.querySelector(".buttonDiv");
const buttonCl=document.querySelector(".buttonCl");
const buttonEq=document.querySelector(".buttonEq");
let num;
let num1;
let num2;
let op;  
window.onload = function(){
    
        let input=document.querySelector("input");
        input.addEventListener("keypress",function  (e) {
            if(e.key==="Enter"){
                e.preventDefault();
                document.getElementById("submitButton").click();
            }
        });

        document.getElementById("submitButton").onclick= function b(){
           input =document.querySelector("input").value.trim();
            console.log(input);
            num=input;
            //console.log(num);
            num1=num;
            //console.log(num1);
        }
        /*if(input!==null && input!==undefined){
            num1=num;
            console.log(num);
        }*/
        
        //calculator();
       /* switch (button) {
            case operators.add:
                buttonAdd.addEventListener("click",buttonAddClick);
                opt=buttonAdd;
                break;
            case operators.subtract:
              buttonSub.addEventListener("click",buttonSubClick);
              op=buttonSub;
            break;
            case  operators.multiply:
              buttonMul.addEventListener("click",buttonMulClick);
              op=buttonMul;
            break;
            case operators.divide:
              buttonDiv.addEventListener("click",buttonDivClick);
              op=buttonDiv;
            break;
        } */
    }

function calculator(){
    console.log("Do the calculation");
    console.log(num1);
    switch (button) {
        case operators.add:
            buttonAdd.addEventListener("click",buttonAddClick);
            opt=buttonAdd;
            break;
        case operators.subtract:
          buttonSub.addEventListener("click",buttonSubClick);
          op=buttonSub;
        break;
        case  operators.multiply:
          buttonMul.addEventListener("click",buttonMulClick);
          op=buttonMul;
        break;
        case operators.divide:
          buttonDiv.addEventListener("click",buttonDivClick);
          op=buttonDiv;
        break;
    }
    console.log(op);
    console.log(num2);
    //buttonEq.addEventListener("click",displayIT);
    (num1 + op+ num2+ "=" + operate(op,num1,num2));
    return operate(op,num1,num2);
}

function displayIT(){
   display.innerHTML=num1 + op+ num2+ "=" + operate(op,num1,num2);
    return operate(op,num1,num2);

}
function buttonAddClick(e){
console.log(operators.add);
}
function buttonSubClick(e){
    return operators.subtract;
}
function buttonMulClick(e){
    return operators.multiply;
}

function buttonDivClick(e){
    return operators.divide;
}
function buttonClick(e){
    return e.target.value;
}



