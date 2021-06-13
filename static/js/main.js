let button = document.getElementById('btn');
let birthYear = document.getElementById("year").value;
let birthMonth = document.getElementById("month").value;
let birthDay = document.getElementById("day").value;
let male = document.getElementById("male")
let female = document.getElementById("female")
let mm;
let cc;
let dd;
let yy


function calcDayOfBirth() {
    let mm = birthMonth;
    let dd = birthDay;
    let yearArr = birthYear.toString().split("");
    let cc = parseInt(yearArr.slice(0, 2).join(""));
    let yy = parseInt(yearArr.slice(2).join(""));
    if (year >= 2000) {
      yy = 100 + parseInt(yearArr.slice(2).join(""));
    }
    let d = Math.floor(
      (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7
    );
    return d;
  }
