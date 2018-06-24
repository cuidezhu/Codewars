/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
Go challenge Build Tower Advanced once you have finished this :)
*/

function towerBuilder(nFloors) {
  let result = [];

  for (let i = 0; i < nFloors; i++) {
    let nRow = '';
    for (let j = 0; j < nFloors - i - 1; j++) {
      nRow += ' ';
    }
    for (let k = 0; k < 2 * (i + 1) - 1; k++) {
      nRow += '*';
    }
    for (let j = 0; j < nFloors - i - 1; j++) {
      nRow += ' ';
    }

    result.push(nRow);
  }

  return result;
}
