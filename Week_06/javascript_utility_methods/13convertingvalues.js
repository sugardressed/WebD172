//Convert to numbers methods.

const idFromURL = "42";
//convert from string to integer (number)
const taskId = Number(idFromURL);
console.log(taskId);
// display charater type
console.log(typeof taskId);
//OUTPUT:
//42
//number

//const taskId = Number(req.params.id); we'll use this alot in this course especially in Express
const quantity = "12";
//instead of converting string to integer, this conver string to integer by usin parseInt
const numberQuantity = parseInt(quantity);
console.log(numberQuantity);
//Number method is preferred, but you might see this in some codes, potentially in AI coding.
//OUTPUT: 12

const taskId2 = 42;
//convert from number to string
const textId = String(taskId);
console.log(textId);
//OUTPUT: STRING TYPE: "42"
