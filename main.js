
const operatorList = ["+", "-", "*", "/", "%"];
const operationList = []; // Array to track the operation being made.
let num1, op; // prompt variables initialized globally.


// Quit calculator main loop.
function quit(variable) {
  if (variable.toLowerCase() === "c") {

    try {
      alert(eval(operationList.join("")));
    } catch (error) {
      alert(`
      You performed an invalid operation!
      Your operation ends with '${
        operationList[operationList.length - 1]
      }' an operator.
      That's not how math works!
      `);
    }
    alert("You have ended your calculator session");
    return true;
  }
}

// Quit the loop for wrong number input
function shouldQuitFromNumPrompt() {

  num1 = prompt(
    "You must enter a number.\nEnter a number :\nEnter 'c' at any point to exit.\n "
  );
  if (quit(num1)) {
    return true;
  } else return false;

}

// Quit the loop for wrong operator input.
function shouldQuitFromOpPrompt() {

  op = prompt(
    "You must enter a valid operator.\nChoose from: *, /, +, - or % \nEnter 'c' at any point to exit.\n"
  );
  if (quit(op)) {
    return true;
  } else return false;

}

alert(`
This is a simple Calculator.
You can perform +, -, *, / and % operations.
Enter c at any point to exit.
`);
while (true) {
  let forceQuit;
  num1 = prompt("Please enter a number\nEnter 'c' at any point to exit.\n ");

  if (quit(num1)) break;

  while (Number.isNaN(num1 - 1) || num1 === null || num1 === "") {
    forceQuit = shouldQuitFromNumPrompt();
    if (forceQuit) break;
  }
  if (forceQuit) break;

  if (typeof Number(num1) === "number") {
    operationList.push(+num1);
  }

  op = prompt("Enter one of the following operators: *, /, +, - or % \n");

  if (quit(op)) break;

  while (!operatorList.includes(op)) {
    forceQuit = shouldQuitFromOpPrompt();
    if (forceQuit) break;
  }
  if (forceQuit) break;

  if (operatorList.includes(op)) {
    operationList.push(op);
  }
}
