// Setting the scores and selecting our HTML elements.
let compscore = 1;
let userscore = 1;
const pScore = document.getElementById('userscore');
const cScore = document.getElementById('compscore');
const buttons = document.querySelectorAll('.gestures button');
const showIcon = document.querySelector('.user i');
const computerShowIcon = document.querySelector('.comp i');
// The randomClass array below this contains the rock,paper, and scissor Icon from font-awesome.
const randomClasses = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors", "far fa-hand-lizard", "far fa-hand-spock"];
const text = document.getElementById('message');

// Game Functionality: Setting forEach function for the buttons.
const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Random rock paper scissor for the computer and the player
            let clickedBtn = e.target.className;
            showIcon.className = clickedBtn;
            let randomNum = Math.floor(Math.random() * randomClasses.length);
            computerShowIcon.className = randomClasses[randomNum];
            // Game Score.
            // If it's a Tie .
            if (showIcon.className === computerShowIcon.className) {
                pScore.innerHTML = pScore.innerHTML;
                cScore.innerHTML = cScore.innerHTML;
                text.innerHTML = "It's a Tie ! ";
                text.style.color = 'orange';
                //Rock outcomes
                //Rock wins
            } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Rock smashes Scissors, You Win! ";
                text.style.color = 'red';
            } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[3]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Rock crushes Lizard, You Win!";
                text.style.color = 'red';
                // Rock Loses.
            } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Paper covers Rock, You Lose! ";
                text.style.color = 'red';
            } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[4]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Spock vapourizes Rock, You Lose!";
                text.style.color = 'red';
                //Paper outcomes
                //Paper wins
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Paper covers Rock, You Win! ";
                text.style.color = 'red';
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[4]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Paper disproves Spock, You Win!";
                text.style.color = 'red';
                // Paper Loses.
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Scissors cuts Paper, You Lose! ";
                text.style.color = 'red';
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[3]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Lizard eats Paper, You Lose!";
                text.style.color = 'red';
            }
        });
    });
}
// Calling the function.
game();
// This function contains all the game logic.