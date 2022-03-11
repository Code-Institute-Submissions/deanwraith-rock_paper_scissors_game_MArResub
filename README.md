# Rock, Paper, Scissors, Lizard and Spock Game
![Website](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/responsive_display.png)
https://deanwraith.github.io/rock_paper_scissors_game/

Rock, paper, scissors is a game of chance where 2 players have a choice of 3 moves that can be made at the same time with different outcomes depending on the move made. The game was expended by Sam Kass to include 2 more moves which are lizard and spock. This version was made popular by the tv series The Big Bang Theory. The game available on this page pits the user against the computer in a first to 5 wins scenario and the game will reset when one of the players has won.

# Table of Contents

- [UX](#ux)
- [Features](#features)
    * [Wireframes](#wireframes)
        - [Landing Page Mock-up Desktop](#landing-page-desktop)
        - [Landing Page Mock-up Mobile](#landing-page-mobile)
        - [Game Page Mock-up Desktop](#game-page-desktop)
        - [Game Page Mock-up Mobile](#game-page-mobile)
        - [Feedback Page Mock-up Desktop](#feedback-page-desktop)
        - [Feedback Page Mock-up Mobile](#feedback-page-mobile)
    * [Existing Features](#existing-features)
        - [Landing Page Features](#landing-page-features)
        - [Game Page Features](#game-features)
        - [Feedback Form Features](#feedback-form-features)
    * [Features to be added](#features-to-be-added)
- [Testing](#testing)
    * [Home Page](#home-page)
    * [Game Page](#game-page)
    * [Feedback Form Page](#feedback-form-page)
    * [Responsiveness Testing](#responsiveness-testing)
    * [Validation Testing](#validation-testing)
    * [Bugs](#bugs)
- [Developement Cycle](#developement-cycle)
    * [Commit Diary](#commit-diary)
- [Technology Used](#technology-used)
- [Deployment](#deployment)
- [Credits](#credits)
    * [Content](#content)
    * [Media](#media)

## UX
The design of this game has been focused around simplicity and convinience. The whole game fits on a full screen for ease of use and visual balance. There is a large, clear area to display the user move and computer selection and a clear text area to inform the outcome of the game. The buttons have been seperated to allow ease of choice and the enlarging of the buttons makes it clear which move will be selected. The score area is simple and to the point with very little clutter so it is clear what the score is.

The goals for the first time user are to experience a new version of a well known game and feel that the outcome is random and fair. The game should draw users back to play again and try to find a strategy that might work or just play to enjoy some down time.

[Back to Table of Contents](#table-of-contents)

## Features

### Wireframes
Below are mock-ups made using Balsamiq showing the original design of the site on desktop and mobile. The design was changed during the process to streamline the responsiveness and game flow.

### Landing Page Desktop
![Landing Page mock-up desktop](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/balsamiq_desktop_landing_page.png)

### Landing Page Mobile
![Landing Page mock-up mobile](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/balsamiq_mobile_landing_page.png)

### Game Page Desktop
![Game Page mock-up desktop](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/balsamiq_desktop_game.png)

### Game Page Mobile
![Game Page mock-up mobile](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/balsamiq_mobile_game.png)

### Feedback Page Desktop
![Feedback Page mock-up desktop](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/balsamiq_desktop_feedback_page.png)

### Feedback Page Mobile
![Feedback Page mock-up mobile](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/balsamiq_mobile_feedback_page.png)

[Back to Table of Contents](#table-of-contents)

## Existing Features

### Landing Page Features
* Header - A link that redirects from any page back to the landing page. The introduction text gives some background information to the game.
![Landing Page Header and Introduction](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/landing_page_header_intro.png)
* Rules - A youtube video that explains the rules of the game.
![Landing Page Video Instruction](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/landing_page_rules.png)
* Game link - A link that redirects to the game page.
![Landing Page Game Link](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/landing_page_gamelink.png)
* Feedback Form link - A link that redirects to the feedback form page.
![Landing Page Feedback Form Link](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/landing_page_feedbacklink.png)
* Footer - Contains links to social media pages.
![Landing Page Footer](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/landing_page_footer.png)

[Back to Table of Contents](#table-of-contents)

### Game Features
* The game page contains a game area with 2 display boxes that display user and computer moves. Below that is the outcome message section that displays the outcome of each round. Below that is the move selection buttons that allow the user to select their move. Finally the score area tracks how many rounds each player wins or loses.
![Game Page Game Area](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/game_page_gameaera.png)

![Game Page Game Area](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/game_page_function.png)

![Game Page Game Area You Win](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/win_message.png)

![Game Page Game Area You Lose](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/lose_message.png)

[Back to Table of Contents](#table-of-contents)

### Feedback Form Features
* The feedback form contains areas for name, surname, email address and the any feedback from the user.
![Feedback Form](https://github.com/deanwraith/rock_paper_scissors_game/blob/main/assets/images/feedback_page_form.png)

### Features to be Added
* Leaderboard - A possible option will be to allow users to register a username and to count how many consecutive games each user wins and to post that to a leaderboard.
* Dark mode

[Back to Table of Contents](#table-of-contents)

## Testing

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

[Back to Table of Contents](#table-of-contents)

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

[Back to Table of Contents](#table-of-contents)

### Feedback Form Page
| Function | Description | Result:Mobile | Result:Desktop |
| --- | --- | --- | --- |
| Header link | Links back to landing page when clicked, on all pages | Passed | Passed |
| Feedback form | The form has sections for name, surname, email and feedback that are all required before the form can be submitted via the submit button at the bottom | Passed | Passed |
| Facebook Icon | Redirects to Facebook in a new window when clicked, on all pages | Passed | Passed |
| Twitter Icon | Redirects to Twitter in a new window when clicked, on all pages | Passed | Passed |
| Instagram Icon | Redirects to Instagram in a new window when clicked, on all pages | Passed | Passed |

[Back to Table of Contents](#table-of-contents)

### Responsiveness Testing
Responsiveness testing was done using several mobile devices of different size to see the site effectiveness at different resolutions. 
The devices used were:
* Iphone SE
* IPad
* HP Elite Book Laptop as well as the Inspect function on Google Chrome Browser to test most resolutions and devices.

### Validation Testing
* HTML
    * [W3C Validator](https://validator.w3.org/)
    All HTML code was checked using this validator and was returned without any issues.
* CSS
    * [Jigsaw Validator](https://jigsaw.w3.org/css-validator/)
    All CSS code was tested using this validator and was returned with no issues.
* JavaScript
    * [JavaScript Tester online](https://www.webtoolkitonline.com/javascript-tester.html)
    All JavaScript code was tested using this online tool and was returned with no issues.

### Bugs
* Any bugs

[Back to Table of Contents](#table-of-contents)

## Developement Cycle
### Commit Diary
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
    * 14:20 08/08/2021 - README.md
    Edited README.md
    * 15:32 08/08/2021 - HTML, CSS and README.md
    Added a div to introduction section and responsiveness. Edited README.md
    * 00:17 09/08/2021 - HTML, CSS and README.md
    Styled and edited content and responsiveness. Edited README.md
    * 08:45 09/08/2021 - HTML, CSS, JavaScript and README.md
    Styled and edited content of result message and responsiveness. Edited README.md
    * 12:48 09/08/2021 - HTML, CSS, JavaScript and README.md
    Styled and edited content of result message and responsiveness. Edited README.md
    * 15:57 09/08/2021 - README.md
    Edited README.md and added image to assets.
    * 21:51 10/08/2021 - README.md
    Fix console fault and styling on landing page. Edited README.md.
    * 11:00 11/03/2022 - Validation Corrections
    Corrected validation issues found on index and game files.
    * 11:02 11/03/2022 - README.md
    Edited README.md.
    
[Back to Table of Contents](#table-of-contents)

## Technology Used

* HTML5
* CSS3
* Javascript
* Github
* Gitpod
* Balsamiq

## Deployment

The site has been deployed using Github Pages.

* In the Github repository page for deanwraith/rock_paper_scissors_game the settings tab was selected.
* In the settings page the Github Pages section was located towards the bottom of the page, with the new version there is a link to the dedicated Pages tab which was navigated to once the hyperlink text was selected.
* Once on the Pages tab the master branch tab was selected in the source section and then save was clicked.

* The site was then live and can be found at https://deanwraith.github.io/rock_paper_scissors_game/

[Back to Table of Contents](#table-of-contents)

## Credits

### Content
    * Google fonts - The special fonts used for the project were sourced from Google fonts.
    * Font Awesome - The icons used in the project were sourced from Font Awesome
    * W3Schools - Used the resources as a guideline for various functionality and styling.
    
### Media
    * The background image I used in the site was downloaded from Shutterstock using the verified licences.
    * The video was linked directly from the youtube account page.
    * Gifs were sourced from Giphy website.

[Back to Table of Contents](#table-of-contents)