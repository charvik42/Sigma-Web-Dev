console.log("Andy is a hacker");
console.log("Rohan is a hecker");

setTimeout(() =>{
    console.log("I am inside settimeout")
}, 0);

setTimeout(() =>{
    console.log("I am inside settimeout 2")
}, 0);

console.log("The end");

const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Andy", fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
