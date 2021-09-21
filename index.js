const input = document.getElementById('date');
const button = document.getElementById('btn');
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isPalindrome(str) {
  let reverseStr = reverseString(input.value);
  return (str = reverseStr);
}

function convertDateToStr(date) {
  let dateString = { day: '', month: '', year: '' };
  if (dateString.day < 10) {
    dateString.day = '0' + date.day;
  } else {
    dateString.day = date.day.toString();
  }

  if (dateString.month < 10) {
    dateString.month = '0' + date.month;
  } else {
    dateString.month = date.month.toString();
  }

  dateString.year = date.year.toString();
  return dateString;
}

let date = {
  day: 5,
  month: 9,
  year: 2021,
};

const reverseString = str => {
  return str.split('').reverse().join('');
};

console.log(convertDateToStr(date));
