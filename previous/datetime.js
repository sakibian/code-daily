// The Date Object
const now = new Date();
console.log(now);

const timestamp = now.getTime();
console.log(timestamp);

// Assign the timestamp 0 to a new variable 
const epochTime = new Date(0);
console.log('Epoch Time - ', epochTime); 

// Timestamp method
const newTime = new Date(-6106015800000);
console.log('Timestamp method - ',newTime);

// Date string method
let stringM = new Date("July 4 1776 12:30");
console.log('Date String method - ',stringM);

// Date and time method
const timeMethod = new Date(1776, 6, 4, 12, 30, 0, 0);

console.log('Date Time method - ', timeMethod);

// Init a new birthday instance
const birthday = new Date(1990, 5, 4);
console.log("Sakib's Birthday - ",birthday);

const year = birthday.getFullYear();
console.log(year);

const month = birthday.getMonth();
console.log(month);

const date = birthday.getDate();
console.log(date);

const day = birthday.getDay();
console.log(day);

const hour = birthday.getHours();
console.log(hour);

const min = birthday.getMinutes();
console.log(min);

const sec = birthday.getSeconds();
console.log(sec);

const milSec = birthday.getMilliseconds();
console.log(milSec);

const gmtTime = birthday.getTime();
console.log(gmtTime);

// Get today's date
const today = new Date();

// Compare dates
if(today.getDate() === 3 && today.getMonth === 9) {
    console.log("It's October 3rd.");
} else {
    console.log("It's not October 3rd.");
}

// Print local and UTC timezones
console.log('Local Hour - ',now.getHours());
console.log('UTC Hour -',now.getUTCHours());