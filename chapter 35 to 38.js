//JS chapter 35 to 38

let input = prompt("Enter number to Factorialize:")
function Factorialize(num){
    if(num===0 || num===1){
        return 1
    }
    return num * Factorialize(num-1)
}
console.log(Factorialize(input))

//

function add (a, b){
    z = a + b
    return z
}
function multiply (a, b, c){
    z = a * add(b, c)
    return z
}
let value = multiply(3, 4, 5)
console.log(value)