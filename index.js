const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const win = document.querySelector('.pop-up');
const doneBtn = document.getElementById('done');
const message = document.getElementById('msg');
const decide = document.getElementById('decider');
const overlay = document.querySelector('.overlay'); // Add this line to select the overlay element

doneBtn.addEventListener('click', function(){
    win.classList.remove('show');
    overlay.style.display = 'none';
});

rock.addEventListener('click', function () {
    const randomNumber = Math.random(); // Generate a new random number on each click
    console.log(randomNumber);

    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
        message.textContent = "The computer picked Rock!";
        decide.textContent = "You Both Drawed!";
        decide.style.color = "yellow";
        win.classList.add('show');
        overlay.style.display = 'block';
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        message.textContent = "The computer picked Paper!";
        decide.textContent = "You Lose!";
        decide.style.color = "red";
        win.classList.add('show');
        overlay.style.display = 'block';
    } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        message.textContent = "The computer picked Scissors";
        decide.textContent = "You Win!";
        decide.style.color = "green";
        win.classList.add('show');
        overlay.style.display = 'block';
    } else {
        win.classList.remove('show');
        overlay.style.display = 'block';
    }
});

paper.addEventListener('click', function () {
    const randomNumber = Math.random(); // Generate a new random number on each click
    console.log(randomNumber);

    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
        message.textContent = "The computer picked Rock!";
        decide.textContent = "You Win!";
        decide.style.color = "green";
        win.classList.add('show');
        overlay.style.display = 'block';
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        message.textContent = "The computer picked Paper!";
        decide.textContent = "You Both Drawed!";
        decide.style.color = "yellow";
        win.classList.add('show');
        overlay.style.display = 'block';
    } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        message.textContent = "The computer picked Scissors";
        decide.textContent = "You Lose!";
        decide.style.color = "red";
        win.classList.add('show');
        overlay.style.display = 'block';
    } else {
        win.classList.remove('show');
        overlay.style.display = 'block';
    }
});
scissors.addEventListener('click', function () {
    const randomNumber = Math.random(); // Generate a new random number on each click
    console.log(randomNumber);

    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
        message.textContent = "The computer picked Rock!";
        decide.textContent = "You Lose!";
        decide.style.color = "red";
        win.classList.add('show');
        overlay.style.display = 'block';
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        message.textContent = "The computer picked Paper!";
        decide.textContent = "You Win!";
        decide.style.color = "green";
        win.classList.add('show');
        overlay.style.display = 'block';
    } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        message.textContent = "The computer picked Scissors";
        decide.textContent = "You Both Drawed!";
        decide.style.color = "yellow";
        win.classList.add('show');
        overlay.style.display = 'block';
    } else {
        win.classList.remove('show');
        overlay.style.display = 'block';
    }
});


