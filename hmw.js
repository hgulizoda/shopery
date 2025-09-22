//1
// class Shape {
//   constructor(name) {
//     this.name = name;
//   }
//   area() {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   constructor(name, radius) {
//     super(name);
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// class Square extends Shape {
//   constructor(name, side) {
//     super(name);
//     this.side = side;
//   }

//   area() {
//     return this.side ** 2;
//   }
// }

// class Rectangle extends Shape {
//   constructor(name, a, b) {
//     super(name);
//     this.a = a;
//     this.b = b;
//   }

//   area() {
//     return this.a * this.b;
//   }
// }

//2
// class Student {
//   constructor(id, name, grades) {
//     this.id = id;
//     this.name = name;
//     this.grades = grades;
//   }

//   addGrade(grade) {
//     this.grades.push(grade);
//   }
//   getAverage() {
//     let average =
//       this.grades.reduce((sum, cur) => sum + cur, 0) / this.grades.length;
//     return average;
//   }
// }

// const s1 = new Student(1, "Ali", []);

// s1.addGrade(34);
// s1.addGrade(64);
// s1.addGrade(74);
// s1.addGrade(84);
// s1.addGrade(94);

// console.log(s1.grades);
// console.log(s1.getAverage());
