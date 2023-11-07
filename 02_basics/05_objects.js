// Object de-structure
const course = {
    courseName: "JavaScript",
    coursePrice: "999",
    courseInstructor: "Kamran"
}

// console.log(course.courseInstructor);

// Now we will be using object de-structure
const {courseInstructor} = course   // This is called object de-structure
console.log(courseInstructor);

const {courseInstructor: instructor} = course   // You can give any name to you key value in object, e.g,
console.log(instructor);                        // {courseInstructor: instructor}