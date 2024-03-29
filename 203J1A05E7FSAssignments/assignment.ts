//DAY-1 Assignment : TypeScript Fundamentals
//Objective: The objective of this assignment is to reinforce your
// understanding of TypeScript fundamentals including basic types,
// functions, interfaces, and classes.

//Basic Types

let n: number = 18
console.log(n)
let s: string = "Meghana"
console.log(s)
let b: boolean = true
console.log(b)
let arrofnum: number[] = [24,9,22]
console.log(arrofnum)
let tupleofele: [string,number]=["Puja",15]
console.log(tupleofele)
enum daysofaweek{
    Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}
console.log(daysofaweek.Sunday)

//Functions

function add(n1: number, n2: number){
    return n1+n2
}
console.log(add(15,35))

function capitalize(lo: string): string{
    return lo.charAt(0).toUpperCase()+lo.slice(1)
}
console.log(capitalize("Hello Meghana"))

//Interfaces

interface Person{
    Name: string
    Age: Number
    Email: string
}
let user: Person = {
    Name: "Meghana",
    Age: 21,
    Email: "megha123@gmail.com"
}
console.log(user)

//Classes

class Car{
    Make: string
    Model: string
    Year: number
    constructor(Make: string, Model: string, Year: number){
        this.Make=Make
        this.Model=Model
        this.Year=Year
    }
    DisplayInfo(){
        return "CAR INFORMATION: " + this.Make + " " + this.Model + " " + this.Year
    }
}
let c = new Car("AUDI", "Q7", 2023)
console.log(c.DisplayInfo())

//Generics

function reverseArray<ARR>(array:any[]){
    return array.reverse()
}
console.log(reverseArray(["Meghana","Puja",18,15]))
