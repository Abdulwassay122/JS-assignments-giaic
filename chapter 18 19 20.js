//JS chapter 18 19 20

let courses = []
for (let i=1; i<6; i++){
    let coursesNames = prompt(`Enter Course ${i}`, `course${i}`)
    courses.push(coursesNames)
}
alert(`Courses: ${courses}`)

for (let i=0; i<5; i++){
    let updatedCoursesNames = prompt(`Update Course ${i+1}`, `${courses[i]}`)
    courses.splice(i, 1, updatedCoursesNames)
}
alert(`Updated Courses: ${courses}`)
