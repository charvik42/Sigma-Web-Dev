const fs = require ("fs")
// const fs = require ("fs/promises")

// console.log(fs)

console.log("starting")
// fs.writeFileSync("Andy.txt", "Andy is a good boy")
fs.writeFile("Andy2.txt", "Andy is a good boy 2", ()=>{
    console.log("Done")
    fs.readFile("Andy2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("Andy.txt", " Andy Robo" ,(e, d)=>{
    console.log(d)
})

console.log("ending")