let userChoice;
let optionElem = document.getElementsByName('userChoice');
let userChoiceButton = document.getElementById('userChoiceButton');
let askUserChoiceElem = document.getElementById('askUserChoice');
let resultElem = document.getElementById('result');
let userResultImg = document.getElementById('userChoiceImage');
let comChoiceImage = document.getElementById('comChoiceImage');
let resultTextElem = document.getElementById('resultText');
let resultContent;
let againButton = document.getElementById('againButton');


// function that fires after the player clicks "shoot!" button
function showResult() {

    // get the value that the player checked
    for(let i = 0; i < 3; i++){ 
        if (optionElem[i].checked){
            userChoice = optionElem[i].value;
        }
    }
    // set the appropriate image to show the result
    if(userChoice == 'rock') {
        userResultImg.setAttribute('src', 'images/rock.png');
        userResultImg.setAttribute('alt', 'rock');
    }else if(userChoice == 'paper') {
        userResultImg.setAttribute('src', 'images/paper.png');
        userResultImg.setAttribute('alt', 'paper');
    } else {
        userResultImg.setAttribute('src', 'images/scissors.png');
        userResultImg.setAttribute('alt', 'scissor');
    }

    //get the computer's choice and set the appropriate image to show the result
    let computerChoice = Math.random();
    if(computerChoice <= 0.33) {
        computerChoice = 'rock';
        comChoiceImage.setAttribute('src', 'images/rock.png');
        comChoiceImage.setAttribute('alt', 'rock');
    } else if(computerChoice <= 0.66) {
        computerChoice = 'paper';
        comChoiceImage.setAttribute('src', 'images/paper.png');
        comChoiceImage.setAttribute('alt', 'paper');
    } else {
        computerChoice = 'scissors';
        comChoiceImage.setAttribute('src', 'images/scissors.png');
        comChoiceImage.setAttribute('alt', 'scissors');
    }

    //determine the winner and set text and color to show the result
    if(userChoice == computerChoice) {
        resultContent = document.createTextNode('The result is tie!');
    } else if (userChoice == 'rock') {
        if(computerChoice == 'scissors') {
            resultContent = document.createTextNode('You win!');
            document.body.style.backgroundColor = 'rgba(240, 72, 72, .1)';
        } else {
            resultContent = document.createTextNode('You lose!');
            document.body.style.backgroundColor = 'rgba(54, 54, 115, .1)';
        }
    } else if (userChoice == 'paper') {
        if(computerChoice == 'rock') {
            resultContent = document.createTextNode('You win!');
            document.body.style.backgroundColor = 'rgba(240, 72, 72, .1)';
        } else {
            resultContent = document.createTextNode('You lose!');
            document.body.style.backgroundColor = 'rgba(54, 54, 115, .1)';
        }
    } else if (userChoice == 'scissors') {
        if(computerChoice == 'paper') {
            resultContent = document.createTextNode('You win!');
            document.body.style.backgroundColor = 'rgba(240, 72, 72, .1)';
        } else {
            resultContent = document.createTextNode('You lose!');
            document.body.style.backgroundColor = 'rgba(54, 54, 115, .1)';
        }
    }

    resultTextElem.appendChild(resultContent);

    // switch the display (show and hide)
    askUserChoice.style.display = 'none';
    resultElem.style.display = 'block';
}

// function that fires after the player clicks "Play again" button
function playAgain() {
    window.location.reload(true);
}

// event listener: when the player clicks the 'shoot!' button
userChoiceButton.addEventListener ('click', showResult, false);

// event listener: when the player clicks the 'Play again' button
againButton.addEventListener('click', playAgain, false);