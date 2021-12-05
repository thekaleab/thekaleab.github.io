function Student(firstName, lastName, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
   }
   Student.prototype.inputNewGrade = function (newGrade) {
        this.grades.push(newGrade);
   }
   Student.prototype.computeAverageGrade = function () {
        return this.grades.reduce((sum, current, index, array) => sum + current /array.length, 0);
   }
   const stu1 = new Student('Kibur', 'Shifa');
   stu1.inputNewGrade(100);
   stu1.inputNewGrade(99);
   stu1.inputNewGrade(98);
   stu1.inputNewGrade(97);

   const stu2 = new Student('James', 'Bond');
   stu2.inputNewGrade(100);
   stu2.inputNewGrade(80);
   stu2.inputNewGrade(75);
   stu2.inputNewGrade(99);
   
   const students = [stu1, stu2];
   const result = students.reduce((average, stu, index, array) => average +
   stu.computeAverageGrade() / array.length, 0);
   console.log(result);