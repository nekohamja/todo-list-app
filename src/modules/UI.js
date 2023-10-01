export default class UI {
  // LOAD CONTENT
  static loadHomepage() {
    UI.initAddTaskButtons();
  }

  // ADD TASK EVENT LISTENER
  static initAddTaskButtons() {
    const addTaskContainer = document.querySelector(".todo");
    const addTaskButton = document.querySelector(".todo-add");

    addTaskContainer.addEventListener("click", UI.closeAddTaskPopup);
    addTaskButton.addEventListener("click", (e) => {
      e.stopPropagation();
      UI.openAddTaskPopup();
    });
  }

  static openAddTaskPopup() {
    const addTaskTitle = document.querySelector("#title");
    const addTaskCheckBox = document.querySelector("#checkbox");
    const addTaskColor = document.querySelector("#color");
    addTaskTitle.classList.add("active");
    addTaskCheckBox.classList.add("active");
    addTaskColor.classList.add("active");
  }

  static closeAddTaskPopup() {
    const addTaskTitle = document.querySelector("#title");
    const addTaskCheckBox = document.querySelector("#checkbox");
    const addTaskColor = document.querySelector("#color");
    addTaskTitle.classList.remove("active");
    addTaskCheckBox.classList.remove("active");
    addTaskColor.classList.remove("active");
  }
}
