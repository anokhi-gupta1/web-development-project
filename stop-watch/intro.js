// Define the necessary variables
let isRunning = false;
let time = 0; // Time in seconds
let timer;

// DOM elements
const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('StopBtn');
const resetBtn = document.getElementById('resetBtn');
const getTimeBtn = document.getElementById('getTimeBtn');
const clearTimeBtn = document.getElementById('clearTimeBtn');
const resetValue = document.querySelector('.resetValue');

let intervalId;
let start = 0;

// Start the timer
const startTimer = () => {
  intervalId = setInterval(() => {
    timeDisplay.innerText = start++;
  }, 1000);
};

// Stop the timer
const stopTimer = () => {
  clearInterval(intervalId);
};

// Reset the timer
const resetBtnTimer = () => {
  start = 0;
  timeDisplay.innerText = start;
  clearInterval(intervalId);
};

// Show stop time when "Get Time" button is clicked
const showStopValue = () => {
  const para = document.createElement('p');
  para.innerText = `The stop time is: ${start-1} seconds`;
  resetValue.append(para);
};

// Clear the resetValue section
const clear = () => {
  resetValue.innerHTML = '';
  resetBtnTimer();

};

// Event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetBtnTimer);
clearTimeBtn.addEventListener("click", clear);
getTimeBtn.addEventListener("click", showStopValue);
