
class Student
{
    public name : string;
    public studentNumber : number;
    constructor(name : string , studentNumber)
    {
        this.name = name;
        this.studentNumber = studentNumber;
    } 
}
let student = new Student("Jano",12345)
console.log(student.name + " " + student.studentNumber);