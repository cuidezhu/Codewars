/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  let hour = 0;
  let minute = 0;
  let second = 0;

  let result = '';

  second = seconds % 60;
  seconds = parseInt(seconds / 60);

  minute = seconds % 60;
  seconds = parseInt(seconds / 60);

  hour = seconds;

  return twoDigits(hour) + ':' + twoDigits(minute) + ':' + twoDigits(second);
}

function twoDigits(num) {
  if (num > 10) {
    return num.toString();
  } else {
    return '0' + num;
  }
}
