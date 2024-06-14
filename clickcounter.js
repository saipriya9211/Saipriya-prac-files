let counterValueEl = document.getElementById("counterValue"); 
let clickCount = localStorage.getItem("clickCount"); 

if (clickCount === null) {
     counterValueEl.textContent = 0; 
    } 
    else { 
        counterValueEl.textContent = clickCount; 
    } 
    function OnincrementCount() {
         let previousCounterValue = counterValueEl.textContent; 
         let updateCounterValue = parseInt(previousCounterValue) + 1; 
         localStorage.setItem("clickCount", updateCounterValue); 
         counterValueEl.textContent = updateCounterValue; 
        }


