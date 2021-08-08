# Rock, Paper, Scissors, Lizard and Spock Game
https://deanwraith.github.io/rock_paper_scissors_game/

Rock, paper, scissors is a game of chance where 2 players have a choice of 3 moves that can be made at the same time with different outcomes depending on the move made. The game was expended by Sam Kass to include 2 more moves which are lizard and spock. This version was made popular by the tv series The Big Bang Theory. The game available on this page pits the user against the computer in a first to 5 wins scenario and the game will reset when one of the players has won.

## Table of Contents

<ol>
<li>UX</li>
<li>
Features
<ol>
<li>Balsamiq Mock Ups</li>
<li>Existing Features</li>
<li>Features to be added</li>
</ol>
</li>
<li>
Testing
<ol>
<li>Validation Testing</li>
</ol>
</li>
<li>Developement Cycle</li>
<li>Technology Used</li>
<li>Deployment</li>
<li>Credits</li>
</ol>

## 1.UX
The design of this game has been focused around simplicity and convinience. The whole game fits on a full screen for ease of use and visual balance. There is a large, clear area to display the user move and computer selection and a clear text area to inform the outcome of the game. The buttons have been seperated to allow ease of choice and the enlarging of the buttons makes it clear which move will be selected. The score area is simple and to the point with very little clutter so it is clear what the score is.

![Full View desktop](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/full_page.png)

![Full View mobile](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/full_page_mobile.png)

## 2.Features

### 2.1 Balsamiq Mock-Ups
Below are mock-ups made using Balsamiq showing the original design of the site on desktop and mobile. The design was changed during the process to streamline the responsiveness and game flow.

**Home Page Mock-Up Desktop**
![Game mock-up desktop](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/Balsamiq_Desktop.png)

**Home Page Mock-Up Mobile**
![Game mock-up mobile](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/Balsamiq_Mobile.png)

### 2.2 Existing Features
* Game Features
* User and Computer move display - The 2 boxes display the moves selected by the user and randomly generated for the computer. The user move is displayed on the left and computer move on the right. 
![User and Computer move display](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/move_display.png)
* Message area - The message area initially welcomes the player and directs the user to make their selection. Once the user makes a selection the message area alerts the outcome of the round. 
![Message area intro](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/message_intro.png)

![Message area outcome](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/message_outcome.png)

* Selection area - Five buttons make up the selection area. Each button is for a different move. Once clicked the users selection will be displayed as well as the randomly assigned computer move. The buttons in the selection area have a enlarge animation on hover to alert which button the user is over. 
![Selection area no expand](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/selection_no_expand.png)

![Selection area expand](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/selection_expand.png)

* Score area - The score area indicates how many rounds the user or computer have won. 
![Score area](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/score_area.png)

### 2.3 Features to be Added
* Leaderboard - A possible option will be to allow users to register a username and to count how many consecutive games each user wins and to post that to a leaderboard.
* Dark mode

## 3. Testing

### Home Page
| Function | Description | Result:Mobile | Result:Desktop |
| --- | --- | --- | --- |
| Header link | Links back to landing page when clicked, on all pages | Passed | Passed |
| Instruction video | Short video that plays when clicked and does not repeat | Passed | Passed |
| Game link | Link to game page that when clicked will redirect to game.html page | Passed | Passed |
| Feedback link| Link to feedback form page that when clicked will redirect to feedback.html page | Passed | Passed |
| Facebook Icon | Redirects to Facebook in a new window when clicked, on all pages | Passed | Passed |
| Twitter Icon | Redirects to Twitter in a new window when clicked, on all pages | Passed | Passed |
| Instagram Icon | Redirects to Instagram in a new window when clicked, on all pages | Passed | Passed |

### Game Page
| Function | Description | Result:Mobile | Result:Desktop |
| --- | --- | --- | --- |
| Header link | Links back to landing page when clicked, on all pages | Passed | Passed |
| Decision Display Boxes | Displays user selected move in left box matching button clicked in selection area. Simultaneously displays randomly generated move for computer in right box | Passed | Passed |
| Outcome message text display | Displays the outcome of the round with specific messages targeted at each unique combination. Either, message + You Win! or message + You Lose! or It's a tie! | Passed | Passed |
| Move choice buttons | Each button represents a possible move by way of an icon. The button expands on hover and when clicked displays the corresponding move and triggers a function to generate and display a random move for the computer | Passed | Passed |
| Score Area | Both user and computer score start at 0. Each win will increase the respective winners score by 1. A tie round does not reflect on the score board. When either player reaches 5 wins a function is triggered to stop the game | Passed | Passed |
| Game Result display | The display is hidden by default and triggered when either player reaches 5 wins. If the user has 5 wins a message stating You Win! will be displayed and You Lose! will be displayed if the computer reaches 5 wins. There is a play again button. | Passed | Passed |
| Game Result display button | The button refreshes the game page when clicked allowing a new game to begin with the scores at 0. | Passed | Passed |
| Facebook Icon | Redirects to Facebook in a new window when clicked, on all pages | Passed | Passed |
| Twitter Icon | Redirects to Twitter in a new window when clicked, on all pages | Passed | Passed |
| Instagram Icon | Redirects to Instagram in a new window when clicked, on all pages | Passed | Passed |

### Feedback Form Page
| Function | Description | Result:Mobile | Result:Desktop |
| --- | --- | --- | --- |
| Header link | Links back to landing page when clicked, on all pages | Passed | Passed |
| Feedback form | The form has sections for name, surname, email and feedback that are all required before the form can be submitted via the submit button at the bottom | Passed | Passed |
| Facebook Icon | Redirects to Facebook in a new window when clicked, on all pages | Passed | Passed |
| Twitter Icon | Redirects to Twitter in a new window when clicked, on all pages | Passed | Passed |
| Instagram Icon | Redirects to Instagram in a new window when clicked, on all pages | Passed | Passed |

Responsiveness testing was done using several mobile devices of different size to see the site effectiveness at different resolutions. 
The devices used were:
* Iphone SE
* IPad
* HP Elite Book Laptop as well as the Inspect function on Google Chrome Browser to test most resolutions and devices.

### 3.1 Validation Testing
* HTML
    * [W3C Validator](https://validator.w3.org/)
    All HTML code was checked using this validator and was returned without any issues.
* CSS
    * [Jigsaw Validator](https://jigsaw.w3.org/css-validator/)
    All CSS code was tested using this validator and was returned with no issues.
* JavaScript
    * [JavaScript Tester online](https://www.webtoolkitonline.com/javascript-tester.html)
    All JavaScript code was tested using this online tool and was returned with no issues.

### 3.2 Unfixed Bugs
* Any bugs

## 4. Developement Cycle
* Commit Diary
    * 17:07 30/07/2021 - Initial Commit
    Added boiler plate HTML and assets folder which includes the style.css file and a folder for media resources to be added at a later stage.
    * 18:48 30/07/2021 - HTML, CSS and README
    Added HTML and CSS content and styling for game. Added to README.md
    * 21:02 30/07/2021 - Java and README
    Added intial Java(tie game and rock outcomes). Added to README.md
    * 23:06 30/07/2021 - Java and README
    Added script for paper outcomes. Added to README.md
    * 00:47 30/07/2021 - Java and README
    Added script for scissors, lizard and spock outcomes. Added to README.md
    * 09:32 31/07/2021 - CSS and README
    Added media queries for responsiveness. Added to README.md
    * 11:35 31/07/2021 - CSS and README
    Added styling to elements. Added to README.md
    * 14:31 31/07/2021 - README
    Added to README.md
    * 15:11 31/07/2021 - README
    Added to README.md and to images folder.
    * 15:18 31/07/2021 - README
    Added to README.md.
    * 13:24 07/08/2021 - HTML, Java and README.md
    Added landing page. Added result message when game ends. Edited README.md
    * 16:29 07/08/2021 - HTML, Java and README.md
    Edited result message when game ends. Edited README.md
    * 00:37 08/08/2021 - HTML, CSS and Java and README.md
    Added content and styling to landing page and game page. Edited result message when game ends. Edited README.md
    * 09:08 08/08/2021 - HTML, CSS and README.md
    Added feedback form with styling and link in landing page. Edited README.md
    * 09:39 08/08/2021 - HTML, CSS and README.md
    Added styling and functionality to entire page. Edited README.md
    * 09:39 08/08/2021 - CSS and README.md
    Added added responsiveness for medium size screens. Edited README.md
    * 12:01 08/08/2021 - CSS and README.md
    Added added responsiveness for small size screens. Edited README.md
    
## 5. Technology Used

* HTML 5
* CSS
* Javascript
* Github
* Gitpod
* Balsamiq

## 6. Deployment

The site has been deployed using Github Pages.

* In the Github repository page for deanwraith/rock_paper_scissors_game the settings tab was selected.
* In the settings page the Github Pages section was located towards the bottom of the page, with the new version there is a link to the dedicated Pages tab which was navigated to once the hyperlink text was selected.
* Once on the Pages tab the master branch tab was selected in the source section and then save was clicked.

* The site was then live and can be found at https://deanwraith.github.io/rock_paper_scissors_game/

## 7. Credits

* Content
    * Google fonts - The special fonts used for the project were sourced from Google fonts.
    * Font Awesome - The icons used in the project were sourced from Font Awesome
    * W3Schools - Used the resources as a guideline for various functionality and styling.
    
* Media
    * The background image I used in the site was downloaded from Shutterstock using the verified licences.