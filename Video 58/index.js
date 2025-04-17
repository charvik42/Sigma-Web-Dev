function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " your course is incredible!");
}


nice("Andy");
nice("Rohit");
nice("Shivam");

function sum(a, b, c=3){
    console.log(a, b, c);
    return a + b + c;
}

result1 = sum(3, 2);
result2 = sum(7, 5);
result3 = sum(3, 13, 1);
console.log("the sum of these numbers is: ", result1)
console.log("the sum of these numbers is: ", result2)
console.log("the sum of these numbers is: ", result3)

// console.log("Hey Andy you are nice");
// console.log("Hey Andy you are good");
// console.log("Hey Andy your tshirt is great");
// console.log("Your course is incredible");

const func1 = (x) =>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);