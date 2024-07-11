// Create a new Date object to get current date information
const currentDate = new Date();

// Array of weekday names
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Array of month names
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Get current day of the week (0-6)
const dayOfWeek = daysOfWeek[currentDate.getDay()];

// Get current month (0-11)
const month = monthsOfYear[currentDate.getMonth()];

// Get current year (yyyy)
const year = currentDate.getFullYear();

// Combine them into a single string
const formattedDate = `${dayOfWeek}: ${month} ${year}`;


// Update the HTML element with id="currentDate"
document.getElementById('currentDate').textContent = formattedDate;

// ======== current time showing code ====== 
function getCurrentTime() {
 const currentDate = new Date();

 let hours = currentDate.getHours();
 const minutes = currentDate.getMinutes();
 const seconds = currentDate.getSeconds();
 const ampm = hours >= 12 ? 'PM' : 'AM';
 hours = hours % 12;
 hours = hours ? hours : 12; // Handle midnight (0 hours)

 const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

 return formattedTime;
}

function updateTime() {
 const currentTime = getCurrentTime();
 document.getElementById('currentTime').textContent = currentTime;
}

// Update time initially
updateTime();

// Update time every second
setInterval(updateTime, 1000);

// time show code end here ------------------------------------  