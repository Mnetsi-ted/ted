 // Variables

    let name = 'Ted'; // String Literal
    console.log(name);

    let isApproved = false;// Boolean Literal
    let firstName = undefined;
    let selectColor = null;


    //connot be a reserved keyword 
    let age = 30;
    let Ted = '20', Theo = '25'; // Number literal
    console.log(Ted,Theo);

    // Moden way of presenting
    console.log(Ted);
    console.log(Theo);

// Constants

    let interestRate = 0.3;
    interestRate = 1;
    console.log(interestRate);

    // u can not declaer constants twice

// referance typing

    let person = {
        name: 'Ted',
        age : 30
    };
    console.log(person);

    // Dot Notation
    person.name = 'Theo';
    console.log(person.name)

    // Bracket Notation
    person['name']= 'Jonh';
    console.log(person['name']);

// Arrays
// used to present a list of objects

let selectColors = ['red','blue'];
selectColors[2]= '4';
console.log(selectColors.length);

// Functions
function greet(name , lastName){
    console.log('Hello Zimbabwe' + name + '' + lastName)
}
greet(' John', ' Muti');
greet(' Theo', ' Munetsi');

// performing a task

// calculting a value
function square(number){
    return number * number;
}
let number = square(2)
console.log(number)