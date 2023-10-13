import { format, isBefore } from "date-fns";
import Storage from "./Storage";
import Project from "./Projects";
import Task from "./Task";

// localStorage.clear();
export default class UI {
  // LOAD CONTENT
  static loadHomepage() {
    UI.loadProjects();
    UI.initProjectButtons();
    UI.openProject("Tasks", document.querySelector("#button-project-tasks"));
    document.addEventListener("keydown", UI.handleKeyboardInput);
  }
  static loadProjects() {
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => {
        if (project.name !== "Tasks" && project.name !== "Reminders") {
          UI.createProject(project.name);
        }
      });
    UI.initAddProjectButtons();
  }
  static loadTasks(projectName) {
    Storage.getTodoList()
      .getProject(projectName)
      .getTasks()
      .forEach((task) =>
        UI.createTask(task.title, task.name, task.dueDate, task.color)
      );

    if (projectName !== "Reminders") {
      UI.initAddTaskButtons();
    }
  }
  static loadProjectContent(projectName) {
    UI.clearTasks();
    const addTaskPanel = document.querySelector(".todo-add");
    const projectTitle = document.querySelector(".project-name");
    projectTitle.textContent = projectName;
    if (projectName !== "Reminders") {
      addTaskPanel.style.display = "flex";
      addTaskPanel.innerHTML = `
      <input type="text" id="title" placeholder="Title" />      
      <textarea id="task" placeholder="Take a note..."></textarea>
      <div class="options">
        <input type="color" id="color" title="Color" value="#FFFFFF"/>
        <input type="date" id="date" title="Add Reminder"/>
        <button id="close">Close</button>
      </div>`;
    } else addTaskPanel.style.display = "none";
    UI.loadTasks(projectName);
  }

  // CREATE/CLEAR CONTENT
  static createProject(name) {
    const userProjects = document.querySelector(".user-projects-list");
    const nav = document.querySelector(".nav");
    const activeToggle = nav.classList.contains("active") ? "active" : "";

    userProjects.innerHTML += ` 
    <button class="button-project" data-project-button>
      <div class="left-panel">
        <ion-icon name="folder" size="large"></ion-icon>
        <span class="${activeToggle}">${name}</span>
      </div>
      <div class="right-panel ${activeToggle}">
        <span class="delete">
          <ion-icon name="close" class="delete"></ion-icon>
        </span>
      </div>
    </button>`;
    UI.initProjectButtons();
  }
  static createTask(title, desc, dueDate, color) {
    const tasksList = document.querySelector(".pending-tasks");
    const hasTitle = title === "" ? "none" : "";
    const hasDueDate = dueDate === "" ? "none" : "";
    tasksList.innerHTML += ` 
      <div class="task" style="background: ${color}" data-task-button>
        <p class="task-title ${hasTitle}">${title}</p>
        <input type="text" id="task-title" data-input-task-title/>
        <p class="task-desc">${desc}</p>
        <input type="text" id="task-desc" data-input-task-desc/>
        <div class="deadline ${hasDueDate}">
          <ion-icon name="time-outline"></ion-icon>
          <p class = "task-date">${dueDate}</p>
          <input type="date" id="task-date" data-input-due-date/>
        </div>
        <div class="actions">
          <ion-icon name="trash-bin" class="trash" title="Delete task"></ion-icon>
          <ion-icon name="checkmark-circle" class="complete" title="Mark as complete"></ion-icon>
          <ion-icon name="color-palette" class="change-color" title="Change color"></ion-icon>
          <input type="color" id="change-color" value="${color}" data-input-color/>
        </div>
      </div>
    `;
    UI.initTaskButtons();
  }
  static createCompletedTask(title, desc) {
    const tasksList = document.querySelector(".completed-tasks");
    tasksList.innerHTML += ` 
      <div class="task completed" data-task-button>
        <p><b>${title}</b></p>
        <p>${desc}</p>
        <div class="actions">
          <ion-icon name="trash-bin" class="trash"></ion-icon>
        </div>
      </div>
    `;
    UI.initTaskButtons();
  }
  static clearProjects() {
    const projectsList = document.querySelector(".user-projects-list");
    projectsList.innerHTML = "";
  }
  static clearTasks() {
    const pendingTasks = document.querySelector(".pending-tasks");
    pendingTasks.innerHTML = "";
    const completedTasks = document.querySelector(".completed-tasks");
    completedTasks.innerHTML = "";
  }
  static closeAllPopups() {
    UI.closeAddProjectPopup();
    UI.closeAllInputs();
  }
  static closeAllInputs() {
    const taskButtons = document.querySelectorAll("[data-task-button]");
    taskButtons.forEach((button) => {
      UI.closeRenameInput(button, "desc");
      UI.closeRenameInput(button, "title");
      UI.closeSetDateInput(button);
      UI.closeSetColorInput(button);
    });
  }
  static handleKeyboardInput(e) {
    if (e.key === "Escape") UI.closeAllPopups();
  }

  // ADD PROJECT EVENT LISTENER
  static initAddProjectButtons() {
    const addProjectButton = document.querySelector(".button-project-new");
    const addPopup = document.querySelector("#popup-add");
    const cancelPopup = document.querySelector("#popup-cancel");
    const inputPopup = document.querySelector("#popup-input");
    addProjectButton.addEventListener("click", UI.openAddProjectPopup);
    cancelPopup.addEventListener("click", UI.closeAddProjectPopup);
    addPopup.addEventListener("click", UI.addProject);
    inputPopup.addEventListener("keypress", UI.handleAddProjectPopupInput);
  }
  static openAddProjectPopup() {
    const defaultProjectText = document.querySelector(".nav>button>span");
    if (!defaultProjectText.classList.contains("active")) UI.toggleNav();

    const addProjectButton = document.querySelector(".button-project-new");
    const addProjectPopup = document.querySelector(".add-project-popup");
    // UI.closeAllPopups()
    addProjectButton.classList.add("active");
    addProjectPopup.classList.add("active");
  }
  static closeAddProjectPopup() {
    const addProjectButton = document.querySelector(".button-project-new");
    const addProjectPopup = document.querySelector(".add-project-popup");
    const inputPopup = document.querySelector("#popup-input");
    addProjectPopup.classList.remove("active");
    addProjectButton.classList.remove("active");
    inputPopup.value = "";
  }
  static addProject() {
    const inputPopup = document.querySelector("#popup-input");
    const projectName = inputPopup.value;

    if (projectName === "") {
      alert("Project name can't be empty.");
      return;
    }

    if (Storage.getTodoList().contains(projectName)) {
      inputPopup.value = "";
      alert("Project name already exists.");
      return;
    }

    Storage.addProject(new Project(projectName));
    UI.createProject(projectName);
    UI.closeAddProjectPopup();
  }
  static handleAddProjectPopupInput(e) {
    if (e.key === "Enter") UI.addProject();
  }

  // PROJECT EVENT LISTENER
  static initProjectButtons() {
    const tasksButton = document.querySelector("#button-project-tasks");
    const remindersButton = document.querySelector("#button-project-reminders");
    const openNavButton = document.querySelector("#button-toggle-nav");
    const projectButtons = document.querySelectorAll("[data-project-button]");
    tasksButton.addEventListener("click", UI.openTasks);
    remindersButton.addEventListener("click", UI.openReminders);
    openNavButton.addEventListener("click", UI.toggleNav);
    projectButtons.forEach((projectButton) =>
      projectButton.addEventListener("click", UI.handleProjectButton)
    );
  }
  static openTasks() {
    UI.openProject("Tasks", this);
  }
  static openReminders() {
    Storage.updateReminders();
    UI.openProject("Reminders", this);
  }
  static handleProjectButton(e) {
    const projectName = this.children[0].children[1].textContent;
    if (e.target.classList.contains("delete")) {
      UI.deleteProject(projectName, this);
      return;
    }
    UI.openProject(projectName, this);
  }
  static openProject(projectName, projectButton) {
    const defaultProjectButtons = document.querySelectorAll(
      ".button-project-default"
    );
    const projectButtons = document.querySelectorAll(".button-project");
    const buttons = [...defaultProjectButtons, ...projectButtons];
    buttons.forEach((button) => button.classList.remove("active"));
    projectButton.classList.add("active");
    UI.closeAddProjectPopup();
    UI.loadProjectContent(projectName);
  }
  static deleteProject(projectName) {
    Storage.deleteProject(projectName);
    UI.clearProjects();
    UI.loadHomepage();
  }
  static toggleNav() {
    const nav = document.querySelector(".nav");
    const defaultProjectText = document.querySelectorAll(".nav>button>span");
    const userProjectText = document.querySelectorAll(".left-panel>span");
    const userProjectList = document.querySelector(".nav>span");
    const deleteButton = document.querySelectorAll(".right-panel");
    const addProjectPopup = document.querySelector(".add-project-popup");

    // UI.closeAllPopups()
    defaultProjectText.forEach((text) => text.classList.toggle("active"));
    userProjectText.forEach((text) => text.classList.toggle("active"));
    userProjectList.classList.toggle("active");
    nav.classList.toggle("active");
    deleteButton.forEach((text) => text.classList.toggle("active"));
    if (addProjectPopup.classList.contains("active")) UI.closeAddProjectPopup();
  }

  // ADD TASK EVENT LISTENER
  static initAddTaskButtons() {
    const addTaskContainer = document.querySelector(".todo");
    const addTaskButton = document.querySelector(".todo-add");
    const addTaskClose = document.querySelector("#close");
    const addTaskInput = document.querySelector("#task");
    const addTaskTitle = document.querySelector("#title");

    addTaskClose.addEventListener("click", (e) => {
      e.stopPropagation();
      UI.addTask();
      UI.closeAddTaskPopup();
    });
    addTaskContainer.addEventListener("click", (e) => {
      e.stopPropagation();
      UI.closeAddTaskPopup();
    });
    addTaskButton.addEventListener("click", (e) => {
      e.stopPropagation();
      UI.openAddTaskPopup();
    });
    addTaskInput.addEventListener("keypress", UI.handleAddTaskPopupInput);
    addTaskTitle.addEventListener("keypress", UI.handleAddTaskPopupInput);
  }
  static openAddTaskPopup() {
    const addTaskTitle = document.querySelector("#title");
    const addTaskOptions = document.querySelector(".options");
    addTaskOptions.classList.add("active");
    addTaskTitle.classList.add("active");
  }
  static closeAddTaskPopup() {
    const addTaskTitle = document.querySelector("#title");
    const addTaskOptions = document.querySelector(".options");
    addTaskOptions.classList.remove("active");
    addTaskTitle.classList.remove("active");
  }
  static addTask() {
    const projectName = document.querySelector(".project-name").textContent;
    const addTaskTitle = document.querySelector("#title");
    const addTaskInput = document.querySelector("#task");
    const addTaskColor = document.querySelector("#color");
    const addTaskDate = document.querySelector("#date");
    const taskTitle = addTaskTitle.value;
    const taskName = addTaskInput.value;
    const taskColor = addTaskColor.value;
    const taskDate =
      addTaskDate.value === ""
        ? ""
        : format(new Date(addTaskDate.value), "dd/MM/yyyy");

    if (addTaskDate.value !== "") {
      if (isBefore(new Date(addTaskDate.value), new Date())) {
        alert("Date is already in the past.");
        addTaskDate.value = "";
        return;
      }
    }

    if (taskName === "") {
      alert("Task name can't be empty.");
      return;
    }

    if (Storage.getTodoList().getProject(projectName).contains(taskName)) {
      alert("Task name already exists.");
      addTaskTitle.value = "";
      addTaskInput.value = "";
      return;
    }

    if (Storage.getTodoList().getProject(projectName).contains(taskTitle)) {
      alert("Task title already exists.");
      addTaskTitle.value = "";
      addTaskInput.value = "";
      return;
    }

    Storage.addTask(
      projectName,
      new Task(taskTitle, taskName, taskDate, taskColor)
    );

    UI.createTask(taskTitle, taskName, taskDate, taskColor);
    addTaskInput.value = "";
    addTaskTitle.value = "";
    addTaskDate.value = "";
    addTaskColor.value = "#FFFFFF";
    UI.closeAddTaskPopup();
  }
  static handleAddTaskPopupInput(e) {
    const addTaskTitle = document.querySelector("#title");
    const addTaskInput = document.querySelector("#task");
    if (e.key === "Enter") {
      UI.addTask();
      addTaskInput.value = "";
      addTaskTitle.value = "";
      addTaskTitle.blur();
      addTaskInput.blur();
      UI.closeAddTaskPopup();
    }
  }

  // TASK EVENT LISTENER
  static initTaskButtons() {
    const taskButtons = document.querySelectorAll("[data-task-button]");
    const taskDescInputs = document.querySelectorAll("[data-input-task-desc]");
    const taskTitleInputs = document.querySelectorAll(
      "[data-input-task-title]"
    );
    const taskDateInputs = document.querySelectorAll("[data-input-due-date]");
    const taskColorInputs = document.querySelectorAll("[data-input-color]");
    taskButtons.forEach((taskButton) =>
      taskButton.addEventListener("click", UI.handleTaskButton)
    );
    taskDescInputs.forEach((taskDescInput) =>
      taskDescInput.addEventListener("keypress", UI.renameTaskDescription)
    );
    taskTitleInputs.forEach((taskTitleInput) =>
      taskTitleInput.addEventListener("keypress", UI.renameTaskTitle)
    );
    taskDateInputs.forEach((taskDateInput) =>
      taskDateInput.addEventListener("change", UI.setTaskDate)
    );
    taskColorInputs.forEach((taskColorInput) =>
      taskColorInput.addEventListener("change", UI.setTaskColor)
    );
  }
  static handleTaskButton(e) {
    if (e.target.classList.contains("complete")) {
      UI.setTaskCompleted(this);
      return;
    }
    if (e.target.classList.contains("trash")) {
      UI.deleteTask(this);
      return;
    }
    if (e.target.classList.contains("task-desc")) {
      UI.openRenameInput(this, "desc");
      return;
    }
    if (e.target.classList.contains("task-title")) {
      UI.openRenameInput(this, "title");
      return;
    }
    if (e.target.classList.contains("task-date")) {
      UI.openSetDateInput(this);
    }
    if (e.target.classList.contains("change-color")) {
      UI.openSetColorInput(this);
    }
  }
  static setTaskCompleted(taskButton) {
    const projectName = document.querySelector(".project-name").textContent;
    const taskTitle = taskButton.children[0].textContent;
    const taskDescription = taskButton.children[2].textContent;
    Storage.deleteTask(projectName, taskDescription);
    UI.clearTasks();
    UI.loadTasks(projectName);
    UI.createCompletedTask(taskTitle, taskDescription);
  }
  static deleteTask(taskButton) {
    const projectName = document.querySelector(".project-name").textContent;
    const taskDescription = taskButton.children[2].textContent;
    Storage.deleteTask(projectName, taskDescription);
    UI.clearTasks();
    UI.loadTasks(projectName);
  }
  static openRenameInput(taskButton, type) {
    const taskSelected =
      type === "desc" ? taskButton.children[2] : taskButton.children[0];
    const taskInput =
      type === "desc" ? taskButton.children[3] : taskButton.children[1];
    let taskDesc = taskSelected.textContent;
    UI.closeAllPopups();
    taskSelected.classList.add("active");
    taskInput.classList.add("active");
    taskInput.value = taskDesc;
    taskInput.focus();
  }
  static closeRenameInput(taskButton, type) {
    const taskSelected =
      type === "desc" ? taskButton.children[2] : taskButton.children[0];
    const taskInput =
      type === "desc" ? taskButton.children[3] : taskButton.children[1];
    taskSelected.classList.remove("active");
    taskInput.classList.remove("active");
    taskInput.value = "";
  }
  static renameTaskDescription(e) {
    if (e.key !== "Enter") return;
    const projectName = document.querySelector(".project-name").textContent;
    const taskDesc = this.previousElementSibling.textContent;
    const newTaskDesc = this.value;
    if (newTaskDesc === "") {
      alert("Field cannot be blank.");
      return;
    }
    Storage.renameTask(projectName, taskDesc, newTaskDesc);
    UI.clearTasks();
    UI.loadTasks(projectName);
    UI.closeRenameInput(this.parentNode);
  }
  static renameTaskTitle(e) {
    if (e.key !== "Enter") return;
    const projectName = document.querySelector(".project-name").textContent;
    const taskDesc = this.nextElementSibling.textContent;
    const newTaskDesc = this.value;
    if (newTaskDesc === "") {
      alert("Field cannot be blank.");
      return;
    }
    Storage.renameTaskTitle(projectName, taskDesc, newTaskDesc);
    UI.clearTasks();
    UI.loadTasks(projectName);
    UI.closeRenameInput(this.parentNode);
  }
  static openSetDateInput(taskButton) {
    const dueDate = taskButton.children[4].children[1];
    const dueDateInput = taskButton.children[4].children[2];
    UI.closeAllPopups();
    dueDate.classList.add("active");
    dueDateInput.classList.add("active");
    dueDateInput.showPicker();
  }
  static closeSetDateInput(taskButton) {
    const dueDate = taskButton.children[4].children[1];
    const dueDateInput = taskButton.children[4].children[2];
    dueDate.classList.remove("active");
    dueDateInput.classList.remove("active");
  }

  //continue here!!
  // add new parameter for complete/incomplete tasks
  // add all tasks with dates in reminders in TodoList.updateReminders()
  // add Storage.updateReminders(); after adding a new task?

  static setTaskDate() {
    const taskButton = this.parentNode.parentNode;
    const projectName = document.querySelector(".project-name").textContent;
    const taskName = taskButton.children[2].textContent;
    const dueDateInput = taskButton.children[4].children[2];
    const newDueDate = format(new Date(this.value), "dd/MM/yyyy");
    if (isBefore(new Date(this.value), new Date())) {
      alert("Date is already in the past.");
      dueDateInput.value = "";
      return;
    }
    Storage.setTaskDate(projectName, taskName, newDueDate);
    UI.clearTasks();
    UI.loadTasks(projectName);
    UI.closeSetDateInput(taskButton);
  }
  static openSetColorInput(taskButton) {
    const color = taskButton.children[5].children[2];
    const colorInput = taskButton.children[5].children[3];
    UI.closeAllPopups();
    color.classList.add("active");
    colorInput.classList.add("active");
    colorInput.showPicker();
  }
  static closeSetColorInput(taskButton) {
    const color = taskButton.children[5].children[2];
    const colorInput = taskButton.children[5].children[3];
    color.classList.remove("active");
    colorInput.classList.remove("active");
  }
  static setTaskColor() {
    const taskButton = this.parentNode.parentNode;
    const projectName = document.querySelector(".project-name").textContent;
    const taskName = taskButton.children[2].textContent;
    const newColor = this.value;
    Storage.setTaskColor(projectName, taskName, newColor);
    UI.clearTasks();
    UI.loadTasks(projectName);
    UI.closeSetColorInput(taskButton);
  }
}
