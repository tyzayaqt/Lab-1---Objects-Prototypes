const student = {
    firstName: 'John',
    lastName: 'Doe',
    studentId: 12345,
    courses: [],
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    enrollCourse: function(courseName) {
        this.courses.push(courseName);
    },
    getCourseCount: function() {
        return this.courses.length;
    }
};

console.log(student.getFullName());
student.enrollCourse('CMPS2212');
student.enrollCourse('MATH2210');
console.log(student.getCourseCount());