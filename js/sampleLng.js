function Basic_Arith(){

const num1 = parseInt(document.getElementById('n1').value);
const num2 = parseInt(document.getElementById('n2').value);

let add = num1 + num2;

let less = num1 - num2; 

let mul = num1 * num2; 

let div = num1 / num2; 


let results =document.getElementById('adds');
let results2 =document.getElementById('minus');
let results3 =document.getElementById('times');
let results4 =document.getElementById('dibay');

results.innerHTML = "Add answer is: " + add;
results2.innerHTML = "Subtract answer is: " + less;
results3.innerHTML = "Multiply answer is: " + mul;
results4.innerHTML = "Division answer is: " + div;


}
function Get_Average(){

    const num1 = parseInt(document.getElementById('n1').value);
    const num2 = parseInt(document.getElementById('n2').value);

    let avg = num1 * 0.25 + num2 * 0.25;

    let newAVG = document.getElementById('avgg');
    newAVG.innerHTML = "The Average of the inputed numbers is: " + avg;

}