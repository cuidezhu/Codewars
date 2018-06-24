/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

function findUniq(arr) {
  let unique = arr[0];
  if (arr[0] === arr[1]) {
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== unique) {
        unique = arr[i];
        break;
      }
    }
  } else {
    if (arr[0] === arr[2]) {
      unique = arr[1];
    }
  }

  return unique;
}
