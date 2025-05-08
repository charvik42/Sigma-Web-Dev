import fs from"fs/promises"

let a = await fs.readFile("Andy.txt")


let b = await fs.appendFile("Andy.txt", "\n\n\nThis is an amazing promise")
console.log(a.toString(), b)
