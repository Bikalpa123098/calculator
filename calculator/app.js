let nums=document.querySelectorAll(".num")
let clks=document.querySelectorAll(".clk")
let operators=document.querySelectorAll(".operator")
let result=document.querySelector("#result");
let dot=document.querySelector("#dot");


dot.addEventListener('click',()=>{
    
    result.innerHTML=result.innerHTML+dot.innerHTML;
    dot.disabled=true;

})
for (const operator of operators) {
    operator.disabled=true;
}
nums.forEach((num) => {
    num.addEventListener('click',()=>{
        console.log(num.innerHTML);

        // result.innerHTML='';
        result.innerHTML=result.innerHTML+num.innerHTML;
        for (const operator of operators) {
            operator.disabled=false;
           
        }
    })
    
});
operators.forEach((operator) => {
    operator.addEventListener('click',()=>{
        dot.disabled=false;
        console.log(operator.innerHTML);

        // result.innerHTML='';
        result.innerHTML=result.innerHTML+operator.innerHTML;
        

        for (const operator of operators) {
            operator.disabled=true;
        
        }
        
    })
});
function evaluateExpression(expression) {
    try {
        return Function(`'use strict'; return (${expression})`)();
    } catch (error) {
        console.error("Error evaluating expression:", error.message);
        return NaN; // Handle invalid expressions
    }
}
let equall=()=>{
let a=result.innerText;
let b= evaluateExpression(a);
console.log(b);
result.innerHTML=b;
}
for (const clk of clks) {
    clk.disabled=false;
}

function reset(){
window.location.reload();

}