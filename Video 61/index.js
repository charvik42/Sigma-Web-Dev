let random = Math.random();

let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

console.log(random);

if (random > 0.1){
    //perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    
}

else{
    //perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}