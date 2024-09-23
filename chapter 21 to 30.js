//JS chapter 21 to 30

let num = prompt("Enter your number:", 1.11)
// let ciel = Math.ciel(num)
alert(`Converted into greater number: ${ Math.ceil(num)}`)

let text = "This is a dummy Text"
let slicedText = text.slice(0, 4)
let reversedText = ''
for(let i=3; i>=0 ;i--){
    reversedText = reversedText + slicedText[i]
}
alert(`Reversed text: ${reversedText}`)

// second assignment 

let text2 = prompt("Enert text to convent into upper case:", "cloUd naTive computinG") 
let capitalized = text2.toUpperCase()
console.log(capitalized)