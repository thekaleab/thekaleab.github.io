const student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade() {
        return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
    }

    }
    const stu1 = Object.create(student);
    stu1.firstName = 'Kibur';
    stu1.lastName = 'Shifa';
    stu1.inputNewGrade(100);
    stu1.inputNewGrade(98);
    stu1.inputNewGrade(97);
    stu1.inputNewGrade(98);

    const stu2 = Object.create(student);
    stu2.firstName = 'James';
    stu2.lastName = 'Bond';
    stu2.inputNewGrade(100);
    stu2.inputNewGrade(80);
    stu2.inputNewGrade(75);
    stu2.inputNewGrade(99);
    const students = [stu1, stu2];
    const result = students.reduce((average, stu, index, array) => average + stu.
    computeAverageGrade() / array.length, 0);
    console.log(result);