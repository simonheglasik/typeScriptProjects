class Student
{
    private name;
    private number;
    private phoneNumber;
    private adress;
    get getName()
    {
        return this.name;
    }
    set setName(name : string)
    {
        this.name = name;
    }
    get getNumber()
    {
        return this.number;
    }
    set setNumber(number : number)
    {
        this.number = number;
    }
    get getPhoneNumber()
    {
        return this.phoneNumber
    }
    set setPhoneNumber(number : number)
    {
        this.phoneNumber = number
    }
    get getAdress()
    {
        return this.adress
    }
    set setAdress(adress : string)
    {
        this.adress = adress;
    }
    constructor(name : string,number : number, phoneNumber : number , adress : string)
    {
        this.name = name;
        this.number = number;
        this.phoneNumber = phoneNumber;
        this.adress = adress;
    }
}

let student1 = new Student("Sam" , 1 ,987424514," Legionarska 1, 01001 Zilina")
let student2 = new Student("John" , 2,987425891," Legionarska 2, 10001 Zilina")
let students : Student[] = [student1 , student2]
students.forEach(function(item)
{
    console.log(item.getName + " " + item.getNumber + " " + item.getPhoneNumber + " " + item.getAdress)
})
