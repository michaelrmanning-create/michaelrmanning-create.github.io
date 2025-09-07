// Load previous count from localStorage or start at 0
let count = localStorage.getItem("clickCount") 
            ? parseInt(localStorage.getItem("clickCount")) 
            : 0;

// Display the initial count
document.getElementById("counter").textContent = count;

function incrementCounter() {
  count++; // Increase the counter
  document.getElementById("counter").textContent = count; // Update display
  localStorage.setItem("clickCount", count); // Save to localStorage
}
