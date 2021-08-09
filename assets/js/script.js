/**
 * Setting initial scores
 */
let compscore = 1;
let userscore = 1;
/**
 * HTML elements
 */
const pScore = document.getElementById('userscore');
const cScore = document.getElementById('compscore');
const buttons = document.querySelectorAll('.gestures button');
const showIcon = document.querySelector('.user i');
const computerShowIcon = document.querySelector('.comp i');
/**
 * Random array for computer move selection
 */
const randomClasses = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors", "far fa-hand-lizard", "far fa-hand-spock"];
const text = document.getElementById('message');
const textover = document.getElementById('endgame-message')

/**
 * Game operation
 */
const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let clickedBtn = e.target.className;
            showIcon.className = clickedBtn;
            let randomNum = Math.floor(Math.random() * randomClasses.length);
            computerShowIcon.className = randomClasses[randomNum];
            // Game outcomes.
            // Tie .
            if (showIcon.className === computerShowIcon.className) {
                pScore.innerHTML = pScore.innerHTML;
                cScore.innerHTML = cScore.innerHTML;
                text.innerHTML = "It's a Tie ! ";
                text.style.color = 'orange';
                /**
                 * Game Outcomes
                 */
                //Rock wins
            } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Rock smashes Scissors, You Win! ";
                text.style.color = 'orange';
            } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[3]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Rock crushes Lizard, You Win!";
                text.style.color = 'orange';
                // Rock Loses.
            } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Paper covers Rock, You Lose! ";
                text.style.color = 'orange';
            } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[4]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Spock vapourizes Rock, You Lose!";
                text.style.color = 'orange';
                //Paper outcomes
                //Paper wins
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Paper covers Rock, You Win! ";
                text.style.color = 'orange';
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[4]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Paper disproves Spock, You Win!";
                text.style.color = 'orange';
                // Paper Loses.
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Scissors cuts Paper, You Lose! ";
                text.style.color = 'orange';
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[3]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Lizard eats Paper, You Lose!";
                text.style.color = 'orange';
                //Scissors outcomes
                //Scissors wins
            } else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Scissors cuts Paper, You Win! ";
                text.style.color = 'orange';
            } else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[3]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Scissors decapitates Lizard, You Win!";
                text.style.color = 'orange';
                // Scissors Loses.
            } else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Rock smashes Scissors, You Lose! ";
                text.style.color = 'orange';
            } else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[4]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Spock smashes Scissors, You Lose!";
                text.style.color = 'orange';
                //Lizard outcomes
                //Lizard wins
            } else if (showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[1]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Lizard eats Paper, You Win! ";
                text.style.color = 'orange';
            } else if (showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[4]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Lizard poisens Spock, You Win!";
                text.style.color = 'orange';
                // Lizard Loses.
            } else if (showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[0]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Rock cruches Lizard, You Lose! ";
                text.style.color = 'orange';
            } else if (showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[2]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Scissors decapitates Lizard, You Lose!";
                text.style.color = 'orange';
                //Spock outcomes
                //Spock wins
            } else if (showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[0]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Spock vapourizes Rock, You Win! ";
                text.style.color = 'orange';
            } else if (showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[2]) {
                pScore.innerHTML = userscore;
                userscore++;
                text.innerHTML = "Spock smashes scissors, You Win!";
                text.style.color = 'orange';
                // Spock Loses.
            } else if (showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[1]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Paper disproves Spock, You Lose! ";
                text.style.color = 'orange';
            } else if (showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[3]) {
                cScore.innerHTML = compscore;
                compscore++;
                text.innerHTML = "Lizard poisens Spock, You Lose!";
                text.style.color = 'orange';
            }

            // Validate if game is finished
            if (compscore > 5) {
                setOutcomeScreen();
            }
            if (userscore > 5) {
                setOutcomeScreen();
            }
        });
    });
}

game();

/**
 * Message for game result display function
 */
function setOutcomeScreen() {
    document.getElementById("userWinMessage", "compWinMessage").style.display = "none";
    if (userscore > 5) {
        document.getElementById("userWinMessage").style.display = "block";
    } else if (compscore > 5) {
        document.getElementById("compWinMessage").style.display = "block";
    }
}

setOutcomeScreen();
