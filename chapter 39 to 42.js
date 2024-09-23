//JS chapter 39 to 42

let course1 = prompt("Subject1", 70)
let course2 = prompt("Subject2", 70)
let course3 = prompt("Subject3", 70)
let course4 = prompt("Subject4", 70)
let course5 = prompt("Subject5", 70)
let obtainMark = (parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5));
let totalMark = 500
let percentage = obtainMark * 100 / totalMark 
if(percentage >= 90){
    alert(`Grade A+ ${percentage} `)
}
else if(percentage >= 90){
    alert(`Grade A+ ${percentage} `)
}
else if(percentage >= 75){
    alert(`Grade A ${percentage} `)
}
else if(percentage >= 45){
    alert(`Grade B ${percentage} `)
}
else if(percentage >= 30){
    alert(`Grade D ${percentage} `)
}
else if(percentage < 30){
    alert(`Grade F ${percentage} `)
}
