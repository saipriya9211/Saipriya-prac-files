let checkBoxWithLabelContainerEl =  document.getElementById("checkBoxWithLabelContainer");
let checkboxId = "checkbox";
let labelId = "checkboxLabel";

function onCheckboxStatusChange(){
    checkBoxLabelEl.classList.toggle("strike-through");
}


let checkboxInputEl = document.createElement("input");
checkboxInputEl.id = checkboxId;
checkboxInputEl.type = "checkbox";

checkboxInputEl.onclick = function() {
    onCheckboxStatusChange();
}

checkBoxWithLabelContainerEl.appendChild(checkboxInputEl);

let checkBoxLabelEl = document.createElement("label");
checkBoxLabelEl.classList.add("checkbox-label");
checkBoxLabelEl.setAttribute("for", checkboxId);
checkBoxLabelEl.id = labelId;
checkBoxLabelEl.textContent = "I am a Label";

checkBoxWithLabelContainerEl.appendChild(checkBoxLabelEl);