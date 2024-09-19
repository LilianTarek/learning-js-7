// videos from 57-63
// task1
function sayHello(theName, theGender) {
  let m = "";
  if (theGender === "Male") m = "Mr";
  else if (theGender === "Female") m = "Miss";
  if (m === "") {
    console.log(`Hello ${theName}`);
  } else console.log(`Hello ${m} ${theName}`);
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
// task2

function calculate(firstNum, secondNum = "", operation = "add") {
  if (secondNum === "") {
    console.log("Second Number Not Found");
    return;
  }
  if (operation === "add") {
    return firstNum + secondNum;
  } else if (operation === "subtract") {
    return firstNum - secondNum;
  } else if (operation === "multiply") {
    return firstNum * secondNum;
  }
}
// Needed Output
calculate(20); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600

// task3
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Age in years: ${theAge} years`);
    console.log(`Age in months: ${theAge * 12} days`);
    console.log(`Age in days: ${theAge * 12 * 365} days`);
    console.log(`Age in hours: ${theAge * 12 * 365 * 24} hours`);
  } else {
    console.log("Age Out Of Range");
    return;
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
// task 4
function checkStatus(a, b, c) {
  let name;
  let age;
  let status;
  typeof a === "string"
    ? (name = a)
    : typeof a === "number"
    ? (age = a)
    : (status = a);
  typeof b === "string"
    ? (name = b)
    : typeof b === "number"
    ? (age = b)
    : (status = b);
  typeof c === "string"
    ? (name = c)
    : typeof c === "number"
    ? (age = c)
    : (status = c);

  status === true
    ? (status = "You Are Available For Hire")
    : (status = "You Are Not Available For Hire");

  console.log(`Hello ${name},Your Age Is ${age},${status}`);
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// task5
function createSelectBox(startYear, endYear) {
  document.write("<select>");
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option>${i}</option>\n`);
  }
  document.write("</select>");
}
createSelectBox(2000, 2021);

// task6
function multiply(...numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") continue;
    else {
      if (!Number.isInteger(numbers[i])) numbers[i] = parseInt(numbers[i]);
      result *= numbers[i];
    }
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000


// ----------------------------------------------------------------

// videos from 64-70
// task1
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {

let n = zName.split(" ");
return `Hello ${n[0]} .${n[1][0].toUpperCase()}`;

  }
  function ageWithMessage(zAge) {


    let a = parseInt(zAge);
    return `Your Age is ${a}`
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
   return `You Live In ${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`;
  }
  function fullDetails() {
    return `${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(zCountry)}`;
    // Write Your Code Here
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
// task 2
let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function
let urlCreate=(protocol, web, tld)=>`${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// task 3
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }
let checker = (zName3)=>(status3)=>(salary3) =>
{
return status3 === "Available"
  ? `${zName3}, My Salary Is ${salary3}`
  : `Iam Not Avaialble`;
}


console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


// task4
function specialMix(...data) {
  let result = 0;
  let s = 0;
  for (let i = 0; i < data.length; i++) {
    
    if (typeof data[i] === "number")
    {
      result += data[i];
    }
    else if (typeof data[i] === "string")
    {
      data[i] = parseInt(data[i]);
      if (isNaN(data[i])) {
        s++;
      } else {
        result += data[i];
      }

    }
  }
  if (s === data.length)
  {
      return "All Is Strings";
  }
  else
  {
    
    return result;
    }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings



