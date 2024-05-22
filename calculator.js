let billAmountElement = document.getElementById("billamount");
let percentageTipElement = document.getElementById("percentagetip");
let tipAmountElement = document.getElementById("tipamount");
let totalAmountElement = document.getAnimations("totalamount");

let errorMessageElement = document.getElementById("errormessage");

function calculatedtip(){
    let inputNumber = billAmountElement.value;
    let percentage = percentageTipElement.value;

    if (inputNumber === ""){
        errorMessageElement.textContent = "Please Enter a valid Input";

    }else if (percentage === ""){
        errorMessageElement.textContent = "Please Enter a valid Input";
    }else{
        errorMessageElement.textContent = "";
        let billamount = parseInt(inputNumber);
        let percentagetip = parseInt(percentage);
        let calculatedtip = (percentage / 100) * billamount;
    
        let calculatedtotal = billamount + calculatedtip;
        tipAmountElement.value = calculatedtip;
        totalAmountElement.value = calculatedtotal;


    }


}