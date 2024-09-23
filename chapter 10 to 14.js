// JS chapter 10 to 14

let number1 = prompt("Enter First Numer:")
let number2 = prompt("Enter Second Numer:")
let sign = prompt("Enter + , - , * , / , % :")
if(sign === "+"){alert(parseInt(number1) + parseInt(number2))}
else if(sign === "-"){alert(number1-number2)}
else if(sign === "*"){alert(number1*number2)}
else if(sign === "/"){alert(number1/number2)}
else if(sign === "%"){alert(number1%number2)}
else{alert("please enter right sign")}

let obtainMark = prompt("Obtained Marks :")
let totalMark = prompt("Total Marks :")
let percentage = obtainMark / totalMark *100
let sslice = percentage.toString().slice(0,5)
alert(sslice)