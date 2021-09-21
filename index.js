const input = document.getElementById('date');
const button = document.getElementById('btn');
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isPalindrome(str) {
  let reverseStr = reverseString(input.value);
  return (str = reverseStr);
}
const reverseString = str => {
  return str.split('').reverse().join('');
};

function convertDateToStr(date) {
  let dateString = { day: '', month: '', year: '' };
  if (date.day < 10) {
    dateString.day = '0' + date.day;
  } else {
    dateString.day = date.day.toString();
  }

  if (date.month < 10) {
    dateString.month = '0' + date.month;
  } else {
    dateString.month = date.month.toString();
  }

  dateString.year = date.year.toString();
  return dateString;
}

let date = {
  day: 26,
  month: 11,
  year: 2021,
};

function allDataFormat(date) {
  let dateString = convertDateToStr(date);
  let ddmmyyyy = dateString.day + dateString.month + dateString.year;
  let mmddyyyy = dateString.month + dateString.day + dateString.year;
  let yyyymmdd = dateString.year + dateString.month + dateString.day;
  let ddmmyy = dateString.day + dateString.month + dateString.year.substring(2);
  let mmddyy = dateString.month + dateString.day + dateString.year.substring(2);
  let yymmdd = dateString.year.substring(2) + dateString.month + dateString.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindrome(date) {
  var listofPalindromes = allDataFormat(date);
  let flag = false;
  listofPalindromes.forEach((item, index) => {
    if (item === reverseString(item)) {
      flag = true;
    }
  });
  return flag;
}

console.log(checkPalindrome(date));
