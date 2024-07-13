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

document.addEventListener('DOMContentLoaded', function () {
 // Function to check if an element is in the viewport
 function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
   rect.top >= 0 &&
   rect.left >= 0 &&
   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
 }

 // Function to animate counting up
 function countUp(element) {
  const target = +element.getAttribute('data-target');
  const duration = 2000;
  const start = 0;
  let startTime = null;

  function animation(currentTime) {
   if (startTime === null) startTime = currentTime;
   const progress = currentTime - startTime;
   const count = Math.min(Math.floor((progress / duration) * target), target);
   element.textContent = count;
   if (progress < duration) {
    requestAnimationFrame(animation);
   } else {
    element.textContent = target;
   }
  }
  requestAnimationFrame(animation);
 }

 // Get all count elements
 const counts = document.querySelectorAll('.count');
 let counted = false;

 // Function to check and animate counts
 function checkAndAnimateCounts() {
  if (!counted && isInViewport(document.querySelector('.stats'))) {
   counts.forEach(countUp);
   counted = true;
  }
 }

 // Event listeners
 window.addEventListener('scroll', checkAndAnimateCounts);
 window.addEventListener('resize', checkAndAnimateCounts);

 // Initial check
 checkAndAnimateCounts();
});

// ---------- gellery ---------- 
// JavaScript for opening modal on image click
var modal = new bootstrap.Modal(document.getElementById('photoModal'), {
 keyboard: true
});
document.querySelectorAll('.gallery img').forEach(item => {
 item.addEventListener('click', event => {
  modal.show();
 });
});

// --------- video -gellery ----- 
// JavaScript for opening modal with embedded video
var modal = new bootstrap.Modal(document.getElementById('videoModal'), {
 keyboard: true
});

document.querySelectorAll('.gallery-thumbnail').forEach(item => {
 item.addEventListener('click', event => {
  var videoId = item.getAttribute('data-video-id');
  var modalBody = document.getElementById('videoModalBody');
  modalBody.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen class="modal-video"></iframe>';
  modal.show();
 });
});