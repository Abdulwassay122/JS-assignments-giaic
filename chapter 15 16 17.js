//JS chapter 15 16 17
 let courses = []
 let course1 = prompt("course1", "AI")
 let course2 = prompt("course2", "Devolopment")
 let course3 = prompt("course3", "Designing")
 let course4 = prompt("course4", "DataScince")
 let course5 = prompt("course5", "CyberSecurity")
 courses.push(course1, course2, course3, course4, course5)
 alert("Courses: "+courses)
course1 = prompt("Edit Course 1", course1)
course2 = prompt("Edit Course 2", course2)
course3 = prompt("Edit Course 3", course3)
course4 = prompt("Edit Course 4", course4)
course5 = prompt("Edit Course 5", course5)
courses.splice(0,1,course1)
courses.splice(1,1,course2)
courses.splice(2,1,course3)
courses.splice(3,1,course4)
courses.splice(4,1,course5)
alert("Updated courses: " + courses)
