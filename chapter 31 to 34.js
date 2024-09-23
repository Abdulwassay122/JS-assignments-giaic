//JS chapter 31 to 34

let Name = prompt("Enter Your Name:", "Abdul Wassay")
let DOB = prompt("Enter Your Birt Date:", 5)
let MOB = prompt("Enter Your Birt Month:", 5)
let YOB = prompt("Enter Your Birt Year:", 2007)
console.log(`Hello ${Name}, Good Morning, AfterNoon, Evening or Night`)
let dob = new Date(`${DOB}-${MOB}-${YOB}`)
const dobInGMT = dob.toLocaleString();
console.log(`Your Date of Birth is ${dobInGMT}`)
let date = new Date()
let difference = new Date(date - dob)

console.log(`Ypu are ${difference.getUTCFullYear()-1970} Years, ${difference.getUTCMonth()} Months, ${difference.getUTCDay()} Days, ${difference.getUTCHours()} Hours, ${difference.getUTCMinutes()} Minutes, ${difference.getUTCSeconds()} Seconds, Old and   ${Math.floor(difference /(1000*60*60*24))} Days Old` )

let nextBirthday = new Date(date.getFullYear(), MOB-1, DOB)
date > nextBirthday? nextBirthday.setFullYear(date.getFullYear()+1):nextBirthday;

let leftTime = new Date(nextBirthday - date)
if(nextBirthday - date > 0){
console.log(`${Math.floor((nextBirthday - date)/(1000*60*60*24))} Days, ${leftTime.getUTCHours()} Hours, ${leftTime.getUTCMinutes()} Minutes, ${leftTime.getUTCSeconds()} Seconds  Left in Your Birthday`)
} else{
    console.log(`Happy Birthday ${Name}, Today is your ${difference.getUTCFullYear()-1970}th Birthday`)
}






