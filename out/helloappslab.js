var Student = /** @class */ (function () {
    function Student(name, number, phoneNumber, adress) {
        this.name = name;
        this.number = number;
        this.phoneNumber = phoneNumber;
        this.adress = adress;
    }
    Object.defineProperty(Student.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "getNumber", {
        get: function () {
            return this.number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setNumber", {
        set: function (number) {
            this.number = number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "getPhoneNumber", {
        get: function () {
            return this.phoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setPhoneNumber", {
        set: function (number) {
            this.phoneNumber = number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "getAdress", {
        get: function () {
            return this.adress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setAdress", {
        set: function (adress) {
            this.adress = adress;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student1 = new Student("Sam", 1, 987424514, " Legionarska 1, 01001 Zilina");
var student2 = new Student("John", 2, 987425891, " Legionarska 2, 10001 Zilina");
var students = [student1, student2];
students.forEach(function (item) {
    console.log(item.getName + " " + item.getNumber + " " + item.getPhoneNumber + " " + item.getAdress);
});
//# sourceMappingURL=helloappslab.js.map