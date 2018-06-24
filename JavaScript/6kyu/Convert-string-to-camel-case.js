/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str) {
  let strArr = []
  if (str.indexOf('-') !== -1) {
    strArr = str.split('-');
  } else {
    strArr = str.split('_');
  }

  let result = strArr[0];

  for (let i = 1; i < strArr.length; i++) {
    result += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }

  return result;
}
