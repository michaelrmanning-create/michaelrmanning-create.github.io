// Load previous count from localStorage or start at 0
let count = localStorage.getItem("clickCount") 
            ? parseInt(localStorage.getItem("clickCount")) 
            : 0;

// Display initial count
document.getElementById("counter").textContent = count;

function incrementCounter() {
  count++;
  document.getElementById("counter").textContent = count;
  localStorage.setItem("clickCount", count);
}
