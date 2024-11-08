function updateClock() {
 
    let currentTime=new Date().toLocaleTimeString();
    document.getElementById("clock").textContent=currentTime
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
