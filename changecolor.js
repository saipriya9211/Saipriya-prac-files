let bgColorArray = ["'#e75d7c', '#b16cef', '#53cca4', '#628ef0'"];
let btnElement = document.getElementById("button");
let containerElement = document.getElementById("bgContainer");

function clickMe(){
    let numberOfBgColors = bgColorArray.length;
    let randomColorIndex = Math.ceil(Math.random() * numberOfBgColors);
    if (numberOfBgColors === randomColorIndex){
        numberOfBgColors = randomColorIndex - 1;
    } 
    containerElement.style.backgroundColor = bgColorArray[randomColorIndex];
}