const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value == "") {
    alert("you need to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  storeData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //when we click on it
      e.target.classList.toggle("checked"); // then css will
      storeData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      storeData();
    }
  },
  false
);

//function for storing data in local storage

function storeData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//when we refreash or reopen the browser data dont vanished
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
