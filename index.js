const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const win = document.querySelector('.pop-up');
const doneBtn = document.getElementById('done');
const resetBtn = document.querySelector('.reset button');
const message = document.getElementById('msg');
const decide = document.getElementById('decider');
const overlay = document.querySelector('.overlay');
const victory = document.getElementById('win');
const defeat = document.getElementById('lose');
const neither = document.getElementById('draw');
const highScoreDisplay = document.getElementById('high');

let w = 0;
let l = 0;
let d = 0;
let highScore = 0;

function updateScores() {
  victory.textContent = w;
  defeat.textContent = l;
  neither.textContent = d;
}

function checkHighScore() {
  if (w > highScore) {
    highScore = w;
    highScoreDisplay.textContent = highScore;
    saveScoresToLocalStorage(); 
  }
}

function initializeScores() {
  w = parseInt(localStorage.getItem('wins')) || 0;
  l = parseInt(localStorage.getItem('losses')) || 0;
  d = parseInt(localStorage.getItem('draws')) || 0;
  highScore = parseInt(localStorage.getItem('highscore')) || 0;

  victory.textContent = w;
  defeat.textContent = l;
  neither.textContent = d;
  highScoreDisplay.textContent = highScore;
}

function saveScoresToLocalStorage() {
  localStorage.setItem('wins', w.toString());
  localStorage.setItem('losses', l.toString());
  localStorage.setItem('draws', d.toString());
  localStorage.setItem('highscore', highScore.toString());
}

doneBtn.addEventListener('click', function () {
  win.classList.remove('show');
  overlay.style.display = 'none';
});

resetBtn.addEventListener('click', function () {
  w = 0;
  l = 0;
  d = 0;
  updateScores();
  checkHighScore();
  saveScoresToLocalStorage(); 
});

rock.addEventListener('click', function () {
  const randomNumber = Math.random();
  console.log(randomNumber);

  updateScores();

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    message.textContent = "The computer picked Rock!";
    decide.textContent = "You Both Drawed!";
    decide.style.color = "yellow";
    overlay.style.backgroundColor = "rgba(252, 255, 0, 0.07)";
    win.classList.add('show');
    overlay.style.display = 'block';
    d++;
    updateScores();
    checkHighScore();
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    message.textContent = "The computer picked Paper!";
    decide.textContent = "You Lose!";
    decide.style.color = "red";
    overlay.style.backgroundColor = "rgba(255, 14, 0, 0.07)";
    win.classList.add('show');
    overlay.style.display = 'block';
    l++;
    updateScores();
    checkHighScore();
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    message.textContent = "The computer picked Scissors";
    decide.textContent = "You Win!";
    decide.style.color = "green";
    overlay.style.backgroundColor = "rgba(45, 255, 0, 0.07)";
    win.classList.add('show');
    overlay.style.display = 'block';
    w++;
    updateScores();
    checkHighScore();
  } else {
    win.classList.remove('show');
    overlay.style.display = 'block';
  }
});

paper.addEventListener('click', function () {
  const randomNumber = Math.random();
  console.log(randomNumber);

  updateScores();

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    message.textContent = "The computer picked Rock!";
    decide.textContent = "You Win!";
    decide.style.color = "green";
    overlay.style.backgroundColor = "rgba(45, 255, 0, 0.07)";
    win.classList.add('show');
    overlay.style.display = 'block';
    w++;
    updateScores();
    checkHighScore();
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    message.textContent = "The computer picked Paper!";
    decide.textContent = "You Both Drawed!";
    decide.style.color = "yellow";
    overlay.style.backgroundColor = "rgba(252, 255, 0, 0.07)";
    win.classList.add('show');
    overlay.style.display = 'block';
    d++;
    updateScores();
    checkHighScore();
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    message.textContent = "The computer picked Scissors";
    decide.textContent = "You Lose!";
    decide.style.color = "red";
    overlay.style.backgroundColor = "rgba(255, 14, 0, 0.07)";
    win.classList.add('show');
    overlay.style.display = 'block';
    l++;
    updateScores();
    checkHighScore();
  } else {
    win.classList.remove('show');
    overlay.style.display = 'block';
  }
});

scissors.addEventListener('click', function () {
  const randomNumber = Math.random();
  console.log(randomNumber);

  updateScores();

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    message.textContent = "The computer picked Rock!";
    decide.textContent = "You Lose!";
    decide.style.color = "red";
    overlay.style.backgroundColor = "rgba(255, 14, 0, 0.07)";
    win.classList.add('show');
    overlay.style.display = 'block';
    l++;
    updateScores();
    checkHighScore();
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    message.textContent = "The computer picked Paper!";
    decide.textContent = "You Win!";
    decide.style.color = "green";
    overlay.style.backgroundColor = "rgba(45, 255, 0, 0.07)";
    win.classList.add('show');
    overlay.style.display = 'block';
    w++;
    updateScores();
    checkHighScore();
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    message.textContent = "The computer picked Scissors";
    decide.textContent = "You Both Drawed!";
    decide.style.color = "yellow";
    overlay.style.backgroundColor = "rgba(252, 255, 0, 0.07)";
        win.classList.add('show');
        overlay.style.display = 'block';
        d++;
        updateScores();
        checkHighScore();
        } else {
        win.classList.remove('show');
        overlay.style.display = 'block';
        }
        });
        initializeScores();
