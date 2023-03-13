interface Date {
  formatOne(): string;
  isLeapYear(year: number): boolean;
  getDaysInMonth(year: number, month: number): number;
  addMonths(value: number): Date;
  addMonths(value: number): Date;
}
Date.prototype.formatOne = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  return [
    (mm > 9 ? "" : "0") + mm,
    "/",
    (dd > 9 ? "" : "0") + dd,
    "/",
    this.getFullYear(),
  ].join("");
};

Date.isLeapYear = function (year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

Date.getDaysInMonth = function (year, month) {
  return [
    31,
    Date.isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ][month];
};

Date.prototype.isLeapYear = function () {
  return Date.isLeapYear(this.getFullYear());
};

Date.prototype.getDaysInMonth = function () {
  return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

Date.prototype.addMonths = function (value) {
  var n = this.getDate();
  this.setDate(1);
  this.setMonth(this.getMonth() + value);
  this.setDate(Math.min(n, this.getDaysInMonth()));
  return this;
};
Date.prototype.addYears = function (value) {
  var n = this.getDate();
  this.setDate(1);
  this.setFullYear(this.getFullYear() + value);
  return this;
};
Date.prototype.getNextYears = function (value) {
  let arr = [];
  for (var i = 0; i <= value; i++) {
    let date = new Date(this.getUTCFullYear(), this.getMonth(), this.getDate());
    arr.push(date.addYears(i).getFullYear());
  }
  return arr;
};
Date.prototype.getPreviousYears = function (value) {
  let arr = [];
  for (var i = 0; i >= value; i--) {
    let date = new Date(this.getUTCFullYear(), this.getMonth(), this.getDate());
    arr.push(date.addYears(i).getFullYear());
  }
  return arr;
};
const generateDaysForMonth = (month, year) => {
  let date = new Date(year, month, 1);
  let spaceLength = date.getDay();
  let dateMap = [];
  if (spaceLength) {
    let space = new Array(spaceLength).fill(" ");
    dateMap = dateMap.concat(space);
  }
  for (var i = 1; i <= date.getDaysInMonth(); i++) {
    dateMap.push(i);
  }
  return dateMap;
};
let date = new Date();

let monthsLabel = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let daysLabel = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export { date, daysLabel, monthsLabel, generateDaysForMonth };
