let counterElement = document.getElementById("counterValue");

function onDecrement() {
    let previousValue = counterElement.textContent;
    let updateCounterValue = parseInt(previousValue) - 1
    console.log(updateCounterValue)

    if(updateCounterValue < 0){
        counterElement.style.color = "red"
    }

    else if(updateCounterValue > 0){
        counterElement.style.color = "green"
    }

    else {
        counterElement.style.color = "black"
    }

    counterElement.textContent = updateCounterValue

}
function onReset() {
    counterElement.textContent = 0
    counterElement.style.color = "black"
}

function onIncrement(){
    let previousValue = counterElement.textContent
    let updateCounterValue = parseInt(previousValue) + 1

    if(updateCounterValue < 0) {
        counterElement.style.color = "red"

    }

    else if(updateCounterValue > 0) {
        counterElement.style.color = "green"
    }

    else{
        counterElement.style.color = "black"
    }

    counterElement.textContent = updateCounterValue

}
function onIncrement(){
    let previousValue = counterElement.textContent
    let updateCounterValue = parseInt(previousValue) + 1

    if(updateCounterValue < 0) {
        counterElement.style.color = "red"

    }

    else if(updateCounterValue > 0) {
        counterElement.style.color = "green"
    }

    else{
        counterElement.style.color = "black"
    }

    counterElement.textContent = updateCounterValue

}
