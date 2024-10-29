let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let timeDisplayEl = document.getElementById("time-display");
let periodDisplayEl = document.getElementById("period-display");
let homeMessageEl = document.getElementById("home-message");
let guestMessageEl = document.getElementById("guest-message");


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
            if (period < 4) {
                stopTimer();
                period++;
                updatePeriodDisplay();
                time = 600;
                updateTimeDisplay();
            } else {
                stopTimer();
                displayResult();
            }
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

function updatePeriodDisplay() {
    periodDisplayEl.textContent = period
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

function newGame() {
    homeMessageEl.textContent = ""; // Clear home message
    guestMessageEl.textContent = ""; // Clear guest message
    homeScore = 0;
    guestScore = 0;
    period = 1;
    time = 600;
    updateTimeDisplay()
    
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    periodDisplayEl.textContent = period;
    stopTimer()
}

function resetTimer() {
    time = "10:00";
    timeDisplayEl.textContent = time;
}

function displayResult() {
    if (homeScore > guestScore) {
        homeMessageEl.textContent = "Home team has won!";
        guestMessageEl.textContent = ""; // Clear guest message
    } else if (guestScore > homeScore) {
        guestMessageEl.textContent = "Guest team has won!";
        homeMessageEl.textContent = ""; // Clear home message
    } else {
        homeMessageEl.textContent = "It's a tie!";
        guestMessageEl.textContent = ""; // Clear guest message
    }
}
