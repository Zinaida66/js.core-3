let listForm = document.forms.listForm;
let addForm = document.forms.addList;
let text = addForm.text;
let button = addForm.button;
let error = document.querySelector(".error");

button.addEventListener("click", () => {
  if (text.value === "") {
    document.querySelector(".errorWindow").style.display = "block";
    document.querySelector(".errortext").innerHTML =
      "Пусте поле неможна добавити";
  } else if (listForm.length < 12) {
    newTask();
    text.value = "";
  } else {
    document.querySelector(".errorWindow").style.display = "block";
    document.querySelector(".errortext").innerHTML =
      "Максимальна кількість завдань";
    text.value = "";
  }
});

function newTask() {
  let newInput = document.createElement("input");
  newInput.setAttribute("type", "checkbox");
  newInput.setAttribute("name", "choice");
  let newText = document.createElement("span");
  newText.textContent = text.value;
  let newBr = document.createElement("br");
  let newlabel = document.createElement("label");
  newlabel.append(newInput, newText, newBr);

  listForm.append(newlabel);
}

error.addEventListener("click", () => {
  document.querySelector(".errorWindow").style.display = "none";
});
listForm.addEventListener("click", function () {
  if (event.target.type === "checkbox") {
    if (event.target.checked) {
      if (document.getElementsByName("choice").length > 1) {
        event.target.parentElement.remove();
      } else {
        document.querySelector(".errorWindow").style.display = "block";
        document.querySelector(".errortext").innerHTML =
          "Останній таск зі списку Ви не можете видалити.";
        event.preventDefault();
      }
    }
  }
});