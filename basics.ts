// by default enums elements are numbers starting from 0 that have strings for human readability
enum Role {
    ADMIN, READ_ONLY, WRITE, DEVELOPER
};
const person : {name: string, age: number, hobbies: string[], roles: [number, string], role2: Role}= {
    name: 'Maximilian',
    age: 30,
    hobbies : ['sports', 'cooking'],
    roles: [1, 'admin'],
    role2: Role.ADMIN
}


const hamArray = ['Hamilton', 'Burr', 'Jerfferson'];

for(const character of hamArray){
    console.log(character)
}

console.log(typeof hamArray)

// typescript has a 'tuple'
// in the above person.roles is a tuple with element one needing to be a number and element 2 needing to be a string

// below throws error because 'hi' is not a number
// person.roles = ['hi', 'world'];

// below throws error because length is greater than 2
// person.roles = [1, 'dev', 'hi'];

// unfortunately, the push method is a method that is an exception of the tuple structure
person.roles.push(4);

console.log(person.role2)

// other valid enums

enum School {
    TEACHER = 5,
    STUDENT,
    PARENT
}
// School.TEACHER is 5         School.STUDENT is 6   School.PARENT is 7

enum School2 {
    TEACHER = 'TEACHER',
    STUDENT = 6,
    PARENT
}

console.log(School2.PARENT)  //7