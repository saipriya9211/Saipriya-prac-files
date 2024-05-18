let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;
document.getElementById("check").onclick = function () 
{
let x = document.getElementById("number").value;
    if (x == y) {
        alert("YOU GUESSED IS RIGHT"
            + guess + " GUESS ");
    }
    else if (x > y) {
        guess++;
        alert("TRY A SMALLER NUMBER");
    }
    else {
        guess++;
        alert("TRY A GREATER NUMBER")
    }
} 