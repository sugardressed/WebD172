//String Methods: The examples below are some of the basic methods to use for strigs, such as trim, lowercase, uppercase, split, and replace.

const userInput = "   Study MongoDB   ";
//This trims the input
const cleanedInput = userInput.trim();
console.log(cleanedInput);
//OUTPUT: "Study MongoDB"

const search = "MongoDB";
//This change the string to all lowercase
console.log(search.toLowerCase());
//This change the string to all UPERCASE
console.log(search.toUpperCase());
//OUTPUT:
//mongodb
//MONGODB

const technologies = "React,Express,MongoDB";
//This split the elementes when find the delimitator (,)
const technologyArray = technologies.split(",");
console.log(technologyArray);
//OUTPUT:[ 'React', 'Express', 'MongoDB' ]

const message = "Hello student";
//This replace the strings, in this example replace "student" to "developer"
const updatedMessage = message.replace("student", "developer");
console.log(updatedMessage);
//OUTPUT:Hello developer
