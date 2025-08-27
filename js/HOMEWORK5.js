// Practical task

// 1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад для об’єкта
// let mentor = {
//             course: "JS fundamental",
//             duration: 3,
//             direction: "web-development"
//         };
// Результат має бути 3.
// propsCount(mentor);  // 3
function propsCount(currentObject) {
    let res = 0;
    for (let i in currentObject) {
        res++;
    }
    return res;
}

function task01() {
    const mentor = {
        course: 'JS fundamental',
        duration: 3,
        direction: 'web-development',
    };
    const res = propsCount(mentor);
    console.log(`Properties count is ${res}`);
}

// 2. Створіть довільний об’єкт, який має 5 полів.
// Необхідно написати функцію showProps(obj),
// яка приймає даний об’єкт
// і виводить список його властивостей записаних в масив.
// Виведіть також масив значень властивостей об’єкта.
function showProps(obj) {
    // First way
    // console.log(Object.entries(obj).map(prop => prop[0]));
    // console.log(Object.entries(obj).map(prop => prop[1]));

    // Seconf way
    // console.log(Object.getOwnPropertyNames(obj));

    // Third way
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}

function task02() {
    const obj = {
        first: 'first value',
        second: 'second value',
        third: 'third value',
        fourth: 'fourth value',
        fifth: 'fifth value',
    };

    showProps(obj);
}

// 3. Створіть клас Person, в якого конструктор приймає параметри name і surname,
// а також міститься метод showFullName(), який виводить ім’я і прізвище особи.
//
// Від класу Person наслідується клас Student,
// конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
// В класі Student необхідно перевизначити метод showFullName(middleName),
// щоб виводилося не лише ім’я, прізвище, але і по-батькові (middleName) студента.
//
// Також в класі Student необхідно реалізувати метод showCourse(),
// який виводитиме поточний курс студента (від 1 до 6).
// Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.
//
// Приклад результату:
// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 6
class Person {
    showFullName() {
        console.log(`${this.name} ${this.surname}`);
    }

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Student extends Person {
    showFullName(middleName) {
        console.log(`${this.name} ${this.surname} ${middleName}`);
    }

    showCourse() {
        const currentDate = new Date();
        const course = currentDate.getFullYear() - this.year;
        console.log(`course: ${course}`);
    }

    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
}

function task03() {
    const name = document.getElementById('nameT03').value;
    const surname = document.getElementById('surnameT03').value;
    const middleName = document.getElementById('middleNameT03').value;
    const year = document.getElementById('yearT03').value;

    const student = new Student(name, surname, year);
    student.showFullName(middleName);
    student.showCourse();
}

// 4. Створіть клас Worker який буде мати конструктор,
// який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
//        1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника.
//              Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
//        2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник
//              при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
//        3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
// 	4) Вивести значення зарплати з новим experience.
// 	5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче.
//      Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:
//             worker_fullName: salary_value
// 	6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.

/* // Example usage:
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// . . . . . .

// let worker3 = new Worker("Andy Ander", 29, 23);
// . . . . . .

// Output example:
// John Johnson
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690

// Tom Tomson
// Tom Tomson salary: 1056
// . . . . . .
// New experience: 1.5
// Tom Tomson  salary: 1584

// Andy Ander
// Andy Ander salary: 667
// . . . . . .
// New experience: 1.5
// Andy Ander  salary: 1000.5

// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584
*/

class Worker {
    fullName;
    dayRate;
    workingDays;
    #experience = 1.2;

    get experience() {
        return this.#experience;
    }

    set experience(value) {
        this.#experience = value;
    }

    showSalary = () => {
        console.log(`Salary: ${this.dayRate * this.workingDays}`);
    };

    showSalaryWithExperience = () => {
        console.log(
            `Salary with experience: ${this.dayRate * this.workingDays * this.#experience}`
        );
    };

    salaryWithExperience = () => {
        return this.dayRate * this.workingDays * this.#experience;
    }

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
}

function task04() {
    let worker1 = new Worker("John Johnson", 20, 23);
    console.log(worker1.fullName);
    worker1.showSalary();
    worker1.showSalaryWithExperience();
    worker1.experience = 1.5;
    console.log("New experience: " + worker1.experience);
    worker1.showSalaryWithExperience();

    let worker2 = new Worker("Tom Tomson", 48, 22);
    console.log(worker2.fullName);
    worker2.showSalary();
    worker2.showSalaryWithExperience();
    worker2.experience = 1.5;
    console.log("New experience: " + worker2.experience);
    worker2.showSalaryWithExperience();

    let worker3 = new Worker("Andy Ander", 29, 23);
    console.log(worker3.fullName);
    worker3.showSalary();
    worker3.showSalaryWithExperience();
    worker3.experience = 1.5;
    console.log("New experience: " + worker3.experience);
    worker3.showSalaryWithExperience();

    const res = [worker1, worker2, worker3]
        .sort((a, b) => a.salaryWithExperience() - b.salaryWithExperience());

    console.log('Sorted salary:');
    res.forEach(worker => console.log(`${worker.fullName}: ${worker.salaryWithExperience()}`));
}

// 5. Створіть батьківський клас GeometricFigure,
//      який має порожній метод для визначення площі getArea()
//      та метод toString() для виведення назви класу.

/**/// Створіть 3 класи нащадки Triangle, Square і Circle,
//      які наслідуються від класу GeometricFigure.
//      Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури.
//      В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури,
//          наприклад для кола - радіус r.

/**/// 	Створіть зовнішню функцію handleFigures(figures),
//      яка прийматиме масив об’єктів дочірніх класів figures,
//      перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування,
//      виводитиме назву створеного об’єкту відповідної фігури,
//      розраховану площу фігури
//      та сумарну площу всіх фігур.
//      Для реалізації функції можете використати метод reduce().

/**/// class GeometricFigure {
// 			getArea() {
// 	return 0;
// }
// toString() {
//      return Object.getPrototypeOf(this).constructor.name;
// }
//      }
// 		Your code . . .

// 	const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
//     	console.log(handleFigures(figures));

// Приклад результату:
// 	Geometric figure: Triangle - area: 10
// Geometric figure: Square - area: 49
// Geometric figure: Circle - area: 78.53981633974483
// 137.53981633974485 // total area

class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return this.constructor.name;
    }
}

class Triangle extends GeometricFigure {
    getArea() {
        // For simple triangle
        // const p = (this.a + this.b + this.c) / 2;
        // return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

        // For right triangle
        return this.a * this.b / 2;
    }

    constructor(a = 1, b = 1, c = 1) {
        super();

        this.a = a;
        this.b = b;
        this.c = c;
    }
}

class Square extends GeometricFigure {
    getArea() {
        return this.a ** 2;
    }

    constructor(a = 1) {
        super();

        this.a = a;
    }
}

class Circle extends GeometricFigure {
    getArea() {
        return Math.PI * (this.r ** 2);
    }

    constructor(r = 1) {
        super();

        this.r = r;
    }
}

function handleFigures(figures = []) {
    figures.forEach(figure => {
        console.log(`Geometric figure: ${figure.toString()}  - area: ${figure.getArea()}`);
    });

    const initValue = 0;
    const totalArea = figures.reduce(
        (accumulator, currentValue) => accumulator + currentValue.getArea(),
        initValue
    );

    return totalArea;
}

function task05() {
    const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
    console.log(handleFigures(figures));
}