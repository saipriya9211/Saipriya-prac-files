let firstNumberElement = document.getElementById("firstnumber");
let secondNumberElement = document.getElementById("secondnumber");
let userInputElement = document.getElementById("userInput");
let gameResulthElement = document.getElementById("gameResulth");


function restartGame() {
    let firstRandomNumber = Math.ceil(Math.random() * 100);
    let secondRandomNumber = Math.ceil(Math.random() * 100);
    firstNumberElement.textContent = firstRandomNumber;
    secondNumberElement.textContent = secondRandomNumber;
    gameResulthElement.textContent = "";
    userInputElement.value = "";
}

restartGame();

function checkResulth(){
     
    let isEqualTo = parseInt(firstNumberElement.textContent) + parseInt(secondNumberElement.textContent);
    let userInputNumber = parseInt(userInputElement.value);
    if (userInputNumber === ""){
        gameResulthElement.textContent = "Please try again";
        gameResulthElement.style.backgroundColor = '#1e217c';

    } else if (userInputNumber === isEqualTo){
        gameResulthElement.textContent = "Congrts you got it right";
        gameResulthElement.style.backgroundColor = '#028a0f';
    }
    else {
            gameResulthElement.textContent = "please try again";
            gameResulthElement.style.backgroundColor = '#1e217c'
    }


}