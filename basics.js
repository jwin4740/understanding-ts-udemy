// by default enums elements are numbers starting from 0 that have strings for human readability
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["WRITE"] = 2] = "WRITE";
    Role[Role["DEVELOPER"] = 3] = "DEVELOPER";
})(Role || (Role = {}));
;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['sports', 'cooking'],
    roles: [1, 'admin'],
    role2: Role.ADMIN
};
var hamArray = ['Hamilton', 'Burr', 'Jerfferson'];
for (var _i = 0, hamArray_1 = hamArray; _i < hamArray_1.length; _i++) {
    var character = hamArray_1[_i];
    console.log(character);
}
console.log(typeof hamArray);
// typescript has a 'tuple'
// in the above person.roles is a tuple with element one needing to be a number and element 2 needing to be a string
// below throws error because 'hi' is not a number
// person.roles = ['hi', 'world'];
// below throws error because length is greater than 2
// person.roles = [1, 'dev', 'hi'];
// unfortunately, the push method is a method that is an exception of the tuple structure
person.roles.push(4);
console.log(person.role2);
// other valid enums
var School;
(function (School) {
    School[School["TEACHER"] = 5] = "TEACHER";
    School[School["STUDENT"] = 6] = "STUDENT";
    School[School["PARENT"] = 7] = "PARENT";
})(School || (School = {}));
// School.TEACHER is 5         School.STUDENT is 6   School.PARENT is 7
var School2;
(function (School2) {
    School2["TEACHER"] = "TEACHER";
    School2[School2["STUDENT"] = 6] = "STUDENT";
    School2[School2["PARENT"] = 7] = "PARENT";
})(School2 || (School2 = {}));
console.log(School2.PARENT);
