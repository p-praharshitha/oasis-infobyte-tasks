const input = document.querySelector("input");
const btn = document.querySelector(".addTask > button");

btn.addEventListener("click", addList);
input.addEventListener("keyup", (e) => {
  e.keyCode === 13 ? addList(e) : null;
});

function addList(e) {
  const notcompleted = document.querySelector(".notcompleted");
  const completed = document.querySelector(".completed");

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  checkBtn.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';
  delBtn.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

  if (input.value !== "") {
    newLi.textContent = input.value;
    input.value = "";
    notcompleted.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
  }

  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    completed.appendChild(parent);
    checkBtn.style.display = "none";
  });

  delBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}
