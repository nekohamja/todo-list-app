import { add, format } from "date-fns";
import Storage from "./Storage";
import Project from "./Projects";
import Task from "./Task";

export default class UI {
  // LOAD CONTENT
  static loadHomepage() {
    UI.loadProjects();
    UI.initProjectButtons();
    UI.openProject("Tasks", document.querySelector("#button-project-tasks"));
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
    // Storage.getTodoList()
    //   .getProject(projectName)
    //   .getTasks()
    //   .forEach((task) =>
    //     UI.createTask(task.title, task.desc, task.dueDate, task.color)
    //   );

    if (projectName !== "Reminders") {
      UI.initAddTaskButtons();
    }
  }
  static loadProjectContent(projectName) {
    const addTaskPanel = document.querySelector(".todo-add");
    const projectTitle = document.querySelector(".project-name");
    projectTitle.textContent = projectName;
    addTaskPanel.innerHTML = `
    <input type="text" id="title" placeholder="Title" />      
    <textarea id="task" placeholder="Take a note..."></textarea>
    <div class="options">
      <button id="checkbox" title="Add Checklist"><ion-icon name="checkbox-outline"></ion-icon></button>
      <input type="color" id="color" title="Color" value="#FFFFFF"/>
      <input type="date" id="date" title="Add Reminder"/>
      <button id="close">Close</button>
    </div>`;
    UI.loadTasks(projectName);
  }

  // CREATE/CLEAR CONTENT
  static createProject(name) {
    const userProjects = document.querySelector(".user-projects-list");
    userProjects.innerHTML += ` 
    <button class="button-project" data-project-button>
      <div class="left-panel">
        <ion-icon name="folder" size="large"></ion-icon>
        <span class="active">${name}</span>
      </div>
      <div class="right-panel active">
        <span class="delete">
          <ion-icon name="close"></ion-icon>
        </span>
      </div>
    </button>`;
    UI.initProjectButtons();
  }
  static createTask(title, desc, dueDate, color) {
    const tasksList = document.querySelector(".todo-list");
    const visibility = dueDate === "" ? "none" : "";
    tasksList.innerHTML += ` 
      <div class="task" style="background: ${color} ">
        <p><b>${title}</b></p>
        <p>${desc}</p>
        <div class="deadline ${visibility}">
          <ion-icon name="time-outline"></ion-icon>
          <p>${dueDate}</p>
        </div>
      </div>
    `;
  }

  // CONTINUE HERE!!
  // clear methods remove everything
  static clear() {
    UI.clearProjectPreview();
    UI.clearProjects();
    UI.clearTasks();
  }
  static clearProjectPreview() {
    console.log("clear project preview...");
    const projectPreview = document.querySelector(".todo");
    projectPreview.innerHTML = "";
  }

  static clearProjects() {
    const projectsList = document.querySelector(".user-projects-list");
    projectsList.innerHTML = "";
  }
  static clearTasks() {
    console.log("clear tasks...");
    const tasksList = document.querySelector(".todo-list");
    tasksList.innerHTML = "";
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

    // if (Storage.getTodoList().contains(projectName)) {
    //   inputPopup.value = "";
    //   alert("Project name already exists.");
    //   return;
    // }

    // Storage.addProject(new Project(projectName));
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
    UI.openProject("Reminders", this);
  }
  static handleProjectButton(e) {
    const projectName = this.children[0].children[1].textContent;
    // "md" is from ion icon's class
    if (e.target.classList.contains("md")) {
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
  static deleteProject(projectName, button) {
    if (button.classList.contains("active")) UI.clearProjectPreview();
    // Storage.deleteProject(projectName);
    UI.clearProjects();
    UI.loadProjects();
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
    const taskDate = addTaskDate.value;

    if (taskName === "") {
      alert("Task name can't be empty.");
      return;
    }

    // if (Storage.getTodoList().getProject(projectName).contains(taskName)) {
    //   alert("Task name already exists.");
    //   addTaskInput.value = "";
    //   return;
    // }

    // Storage.addTask(projectName, new Task(taskName));
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
}
