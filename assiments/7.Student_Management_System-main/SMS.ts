// class School {
//     name: string;

//     student: Student[] = [];
//     student: Teacher[] = [];

//     addStudent(student:Student) {
//         this.student.push(student_obj);
//     }
//     addTeacher(student:Teacher) {
//         this.student.push(student_obj);
//     }

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// class Student {
//     name: string;
//     age: number;
//     school_name: string;

//     constructor(name: string, age: number, school_name: string) {
//         this.name = name;
//         this.age = age;
//         this.school_name = school_name;
//     }
// }
// class Teacher {
//     name: string;
//     age: number;
//     school_name: string;

//     constructor(name: string, age: number, school_name: string) {
//         this.name = name;
//         this.age = age;
//         this.school_name = school_name;
//     }
// }

// let school_1 = new School("Alpha");
// let school_2 = new School("nooby");

// let student1 = new Student("Usama", 40, school_1.name);
// let student2 = new Student("Ali", 41, school_2.name);
// let student3 = new Student("Burhan", 55, school_2.name);
// let student1 = new Student("safder", 59, school_1.name);
// let student2 = new Student("buran ali", 60, school_2.name);
// let student3 = new Student("ayrkut", 85, school_2.name);


// school1.addStudent(student1);
// school2.addStudent(student2);
// school3.addStudent(student3);


// school1.addTeacher(Teacher1)
// school2.addTeacher(Teacher2)
// school3.addTeacher(Teacher3)

// console.log(school1);
// console.log(school2);





// school_1.addStudent(student1);
// console.log(school3);


// console.log(school_1);












class School {
    name: string;
    students: Student[] = [];
    teachers: Teacher[] = [];

    addStudent(student: Student) {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    }

    constructor(name: string) {
        this.name = name;
    }
}

class Student {
    name: string;
    age: number;
    school_name: string;

    constructor(name: string, age: number, school_name: string) {
        this.name = name;
        this.age = age;
        this.school_name = school_name;
    }
}

class Teacher {
    name: string;
    age: number;
    school_name: string;

    constructor(name: string, age: number, school_name: string) {
        this.name = name;
        this.age = age;
        this.school_name = school_name;
    }
}

let school1 = new School("Alpha");
let school2 = new School("noby");

let student1 = new Student("Usama", 40, school1.name);
let student2 = new Student("Ali", 41, school2.name);
let student3 = new Student("Burhan", 55, school2.name);
let student4 = new Student("Safder", 59, school1.name);
let student5 = new Student("Buran Ali", 60, school2.name);
let student6 = new Student("Ayrkut", 85, school2.name);

school1.addStudent(student1);
school2.addStudent(student2);
school2.addStudent(student3);
school1.addStudent(student4);
school2.addStudent(student5);
school2.addStudent(student6);

let teacher1 = new Teacher("Teacher1", 30, school1.name);
let teacher2 = new Teacher("Teacher2", 35, school2.name);
let teacher3 = new Teacher("Teacher3", 40, school2.name);

school1.addTeacher(teacher1);
school2.addTeacher(teacher2);
school2.addTeacher(teacher3);

console.log(school1);
console.log(school2);
