let bikes = ["Hero" , "Honda", "Bajaj", "Suzuki", "Yamaha"];
let todos = [
    {
        todo: "Attendng CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking Doubts",
        todoStatus: "Completed"
    }
];

let person = {

    name: "Rahul",
    age: 25,
    gender: "Male",
};

let valuesToStringify = [bikes, todos, person];

let jsonContainerEl = document.getElementById("jsonContainer");

function createAndAppendValues(stringifiedValue){
    let valueContainerEl = document.createElement("div");
    valueContainerEl.classList.add("value-container");
    jsonContainerEl.appendChild(valueContainerEl);


    let valueEl = document.createElement("span");
    valueEl.textContent = stringifiedValue;
    valueEl.classList.add("value");
    valueContainerEl.appendChild(valueEl);

}

function converToJSONString(value) {
    let stringifiedValue = JSON.stringify(value);
    createAndAppendValues(stringifiedValue);
}

for (let value of valuesToStringify){
    converToJSONString(value);
}