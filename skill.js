let skillList = [
    {
      skillName: "HTML",
      uniqueNo: 1,
    },
    {
      skillName: "CSS",
      uniqueNo: 2,
    },
    {
      skillName: "Javascript",
      uniqueNo: 3,
    },
];

let skillListContainerEl = document.getElementById("skillListContainer");

function onMarkSkill(labelId){
  let labelEl = document.getElementById(labelId);
  labelEl.classList.toggle("selected");
}

function createAndAppendSkill(skill){

  let checkboxId = "checkbox" + skill.uniqueNo;
  let labelId = "label" + skill.uniqueNo;


  let skillEl = document.createElement("li");
  skillEl.classList.add("p-1");
  skillListContainerEl.appendChild(skillEl);

  let checkBoxEl = document.createElement("input");
  checkBoxEl.id = checkboxId;
  checkBoxEl.type = "checkbox";
  
  checkBoxEl.onclick = function(){
    onMarkSkill(labelId);
  };
  skillEl.appendChild(checkBoxEl);

  let labelEl =  document.createElement("label");
  labelEl.classList.add("checkbox-label");
  labelEl.id = labelId;
  labelEl.setAttribute("for", checkboxId);
  labelEl.textContent = skill.skillName;
  skillEl.appendChild(labelEl);
}

for (let skill of skillList) {
  createAndAppendSkill(skill);
}