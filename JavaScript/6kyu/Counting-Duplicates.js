/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
  let textLowerArr = text.toLowerCase().split('');
  let duplicateAmount = 0;
  let whetherDuplicate = false;
  for (let i = 0; i < textLowerArr.length; i++) {
    let nowText = textLowerArr[i]
    for (let j = i + 1; j < textLowerArr.length; j++) {
      if (nowText === textLowerArr[j]) {
        textLowerArr.splice(j, 1);
        j -= 1;
        whetherDuplicate = true;
      }
    }
    if (whetherDuplicate) {
      duplicateAmount += 1;
      whetherDuplicate = false;
    }
  }

  return duplicateAmount;
}
