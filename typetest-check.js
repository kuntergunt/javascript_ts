// @ts-check


/** @type {number} */
let check;
 
check = 0;      // OK


 check = false; // Not OK



testMe.age = 23
testMe.name = 'Kilory'
//testMe.notexist = 'mustFail'
//testMe.age      = 'mustFail'


testPersonVar.name = "" 
//testPersonLet.name = ""   // error


/** @type {import("./types").Person} */
const  testPerson = { name: "Kilroy", age: 33}

testPerson.age = 23
testPerson.name = 'Kilroy'


testPerson.age = "23"

testPerson = ""

//testPerson.notexist = 'mustFail'
//testPerson.age      = 'mustFail'

