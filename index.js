let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let timeDisplayEl = document.getElementById("time-display");
let periodDisplayEl = document.getElementById("period-display");

let homeScore = 0;
let guestScore = 0;
let period = 1;
let time = 600; // Initial time in seconds (10 minutes = 600 seconds)
let timerInterval = null;

function startTimer() {
    if (timerInterval !== null) return; // Prevent starting multiple timers

    timerInterval = setInterval(() => {
        if (time > 0) {
            time--;
            updateTimeDisplay();
        } else {
            stopTimer(); // Automatically stop timer when time is up
        }
    }, 1000); // Update every second
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // Reset the interval variable
}

function updateTimeDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    // Add leading zero to seconds if less than 10
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    timeDisplayEl.textContent = `${minutes}:${seconds}`;
}

function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        if (homeScore < 0) {
            homeScore = 0;
        }
        homeScoreEl.textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        if (guestScore < 0) {
            guestScore = 0;
        }
        guestScoreEl.textContent = guestScore;
    }
}

document.getElementById('new-game-btn').addEventListener('click', () => {
    homeScore = 0;
    guestScore = 0;
    period = 1;
    time = 600;
    updateTimeDisplay()
    
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    periodDisplayEl.textContent = period;
    stopTimer()
});

document.getElementById('reset-timer-btn').addEventListener('click', () => {
    time = "10:00";
    timeDisplayEl.textContent = time;
});

