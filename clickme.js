let divContainerElement = document.getElementById("checkboxWithLabelcontainer");
divContainerElement.classList.add("divContainer");

let inputElement = document.createElement("input");
inputElement.type = 'checkbox';
inputElement.id = 'checkbox';
inputElement.style.color = 'blue';
inputElement.classList.add('checkbox');
divContainerElement.appendChild(inputElement);

let labelElement = document.createElement('label');
labelElement.setAttribute('for', 'checkbox');
labelElement.id  = 'checklabel';
labelElement.textContent = 'clickme';
labelElement.classList.add('labeliteams');
divContainerElement.appendChild(labelElement);
