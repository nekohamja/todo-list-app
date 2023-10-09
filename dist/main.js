/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/modules/Projects.js":
/*!*********************************!*\
  !*** ./src/modules/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
// handles project creation (and its task content)



class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName);
  }

  contains(taskName) {
    return this.tasks.some((task) => task.getName() === taskName);
  }

  addTask(newTask) {
    if (this.tasks.find((task) => task.getName() === newTask.name)) return;
    this.tasks.push(newTask);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }

  getTasksToday() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted());
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate));
    });
  }
}


/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/modules/Projects.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ "./src/modules/TodoList.js");




class Storage {
  static saveTodoList(data) {
    localStorage.setItem("todoList", JSON.stringify(data));
  }

  static getTodoList() {
    const todoList = Object.assign(
      new _TodoList__WEBPACK_IMPORTED_MODULE_2__["default"](),
      JSON.parse(localStorage.getItem("todoList"))
    );
    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new _Projects__WEBPACK_IMPORTED_MODULE_0__["default"](), project))
    );
    todoList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](), task))
        )
      );
    return todoList;
  }

  static addProject(project) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
  }

  static deleteProject(projectName) {
    const todoList = Storage.getTodoList();
    todoList.deleteProject(projectName);
    Storage.saveTodoList(todoList);
  }

  static addTask(projectName, task) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).addTask(task);
    Storage.saveTodoList(todoList);
  }

  static deleteTask(projectName, taskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).deleteTask(taskName);
    Storage.saveTodoList(todoList);
  }

  static renameTask(projectName, taskName, newTaskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).setName(newTaskName);
    Storage.saveTodoList(todoList);
  }

  static renameTaskTitle(projectName, taskName, newTaskTitle) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).setTitle(newTaskTitle);
    Storage.saveTodoList(todoList);
  }

  static setTaskDate(projectName, taskName, newDueDate) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).setDate(newDueDate);
    Storage.saveTodoList(todoList);
  }
}


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
// handles task creation

class Task {
  constructor(title, name, dueDate, color) {
    this.title = title;
    this.name = name;
    this.dueDate = dueDate;
    this.color = color;
  }

  setTitle(title) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }

  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }
  getDate() {
    return this.dueDate;
  }

  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }

  getDateFormatted() {
    const day = this.dueDate.split("/")[0];
    const month = this.dueDate.split("/")[1];
    const year = this.dueDate.split("/")[2];
    return `${month}/${day}/${year}`;
  }
}


/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/modules/Projects.js");
// handles projects array list (plus new projects)


// import { compareAsc, toDate } from "date-fns";
// import Task from "./Task";

class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new _Projects__WEBPACK_IMPORTED_MODULE_0__["default"]("Tasks"));
    this.projects.push(new _Projects__WEBPACK_IMPORTED_MODULE_0__["default"]("Reminders"));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  contains(projectName) {
    return this.projects.some((project) => project.getName() === projectName);
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.name === newProject.name))
      return;
    this.projects.push(newProject);
  }

  deleteProject(projectName) {
    const projectToDelete = this.projects.find(
      (project) => project.getName() === projectName
    );
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  }
}


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ "./src/modules/Projects.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");





// localStorage.clear();
class UI {
  // LOAD CONTENT
  static loadHomepage() {
    UI.loadProjects();
    UI.initProjectButtons();
    UI.openProject("Tasks", document.querySelector("#button-project-tasks"));
    document.addEventListener("keydown", UI.handleKeyboardInput);
  }
  static loadProjects() {
    _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList()
      .getProjects()
      .forEach((project) => {
        if (project.name !== "Tasks" && project.name !== "Reminders") {
          UI.createProject(project.name);
        }
      });
    UI.initAddProjectButtons();
  }
  static loadTasks(projectName) {
    _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList()
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
        <button id="checkbox" title="Add Checklist"><ion-icon name="checkbox-outline"></ion-icon></button>
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
        <input type="text" id="task-title" data-input-task-title>
        <p class="task-desc">${desc}</p>
        <input type="text" id="task-desc" data-input-task-desc>
        <div class="deadline ${hasDueDate}">
          <ion-icon name="time-outline"></ion-icon>
          <p>${dueDate}</p>
        </div>
        <div class="actions">
          <ion-icon name="trash-bin" class="trash" title="Delete task"></ion-icon>
          <ion-icon name="checkmark-circle" class="complete" title="Mark as complete"></ion-icon>
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
      // UI.closeSetDateInput(button)
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

    if (_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList().contains(projectName)) {
      inputPopup.value = "";
      alert("Project name already exists.");
      return;
    }

    _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(new _Projects__WEBPACK_IMPORTED_MODULE_1__["default"](projectName));
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
    _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(projectName);
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
    const taskDate = addTaskDate.value;

    if (taskName === "") {
      alert("Task name can't be empty.");
      return;
    }

    if (_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList().getProject(projectName).contains(taskName)) {
      alert("Task name already exists.");
      addTaskTitle.value = "";
      addTaskInput.value = "";
      return;
    }

    if (_Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoList().getProject(projectName).contains(taskTitle)) {
      alert("Task title already exists.");
      addTaskTitle.value = "";
      addTaskInput.value = "";
      return;
    }

    _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(
      projectName,
      new _Task__WEBPACK_IMPORTED_MODULE_2__["default"](taskTitle, taskName, taskDate, taskColor)
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

  //continue here!!
  // re adjust date/ rechange color on a task
  // add class for completed tasks
  // date format for tasks
  // prevent picking past dates
  // add all tasks with dates in reminders

  // TASK EVENT LISTENER
  static initTaskButtons() {
    const taskButtons = document.querySelectorAll("[data-task-button]");
    const taskDescInputs = document.querySelectorAll("[data-input-task-desc]");
    const taskTitleInputs = document.querySelectorAll(
      "[data-input-task-title]"
    );
    // const dueDateInputs = document.querySelectorAll('[data-input-due-date]')
    taskButtons.forEach((taskButton) =>
      taskButton.addEventListener("click", UI.handleTaskButton)
    );
    taskDescInputs.forEach((taskDescInput) =>
      taskDescInput.addEventListener("keypress", UI.renameTaskDescription)
    );
    taskTitleInputs.forEach((taskTitleInput) =>
      taskTitleInput.addEventListener("keypress", UI.renameTaskTitle)
    );
  }
  static handleTaskButton(e) {
    if (e.target.classList.contains("complete")) {
      console.log("complete");
      UI.setTaskCompleted(this);
      return;
    }
    if (e.target.classList.contains("trash")) {
      console.log("trash");
      UI.deleteTask(this);
      return;
    }
    if (e.target.classList.contains("task-desc")) {
      UI.openRenameInput(this, "desc");
      return;
    }
    if (e.target.classList.contains("task-title")) {
      console.log("title");
      UI.openRenameInput(this, "title");
      return;
    }
    // if (e.target.classList.contains('deadline')) {
    //   UI.openSetDateInput(this)
    // }
  }
  static setTaskCompleted(taskButton) {
    const projectName = document.querySelector(".project-name").textContent;
    const taskTitle = taskButton.children[0].textContent;
    const taskDescription = taskButton.children[2].textContent;
    _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask(projectName, taskDescription);
    UI.clearTasks();
    UI.loadTasks(projectName);
    UI.createCompletedTask(taskTitle, taskDescription);
  }
  static deleteTask(taskButton) {
    const projectName = document.querySelector(".project-name").textContent;
    const taskDescription = taskButton.children[2].textContent;
    _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask(projectName, taskDescription);
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
    _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].renameTask(projectName, taskDesc, newTaskDesc);
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
    _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].renameTaskTitle(projectName, taskDesc, newTaskDesc);
    UI.clearTasks();
    UI.loadTasks(projectName);
    UI.closeRenameInput(this.parentNode);
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");

document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsZ0RBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsZ0RBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksZ0RBQU87QUFDWDtBQUNBLFVBQVUsNkNBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcmNlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044QjtBQUM5Qiw4Q0FBOEMsbURBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL1RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBoYW5kbGVzIHByb2plY3QgY3JlYXRpb24gKGFuZCBpdHMgdGFzayBjb250ZW50KVxuXG5pbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXRUYXNrcyh0YXNrcykge1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gIH1cblxuICBjb250YWlucyh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gIH1cblxuICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICBpZiAodGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gbmV3VGFzay5uYW1lKSkgcmV0dXJuO1xuICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2sodGFza05hbWUpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2submFtZSAhPT0gdGFza05hbWUpO1xuICB9XG5cbiAgZ2V0VGFza3NUb2RheSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5nZXREYXRlRm9ybWF0dGVkKCkpO1xuICAgICAgcmV0dXJuIGlzVG9kYXkodG9EYXRlKHRhc2tEYXRlKSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vVG9kb0xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIHN0YXRpYyBzYXZlVG9kb0xpc3QoZGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgc3RhdGljIGdldFRvZG9MaXN0KCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBUb2RvTGlzdCgpLFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKVxuICAgICk7XG4gICAgdG9kb0xpc3Quc2V0UHJvamVjdHMoXG4gICAgICB0b2RvTGlzdFxuICAgICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxuICAgICk7XG4gICAgdG9kb0xpc3RcbiAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhcbiAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKVxuICAgICAgICApXG4gICAgICApO1xuICAgIHJldHVybiB0b2RvTGlzdDtcbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGFkZFRhc2socHJvamVjdE5hbWUsIHRhc2spIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5hZGRUYXNrKHRhc2spO1xuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmRlbGV0ZVRhc2sodGFza05hbWUpO1xuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyByZW5hbWVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSwgbmV3VGFza05hbWUpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrKHRhc2tOYW1lKS5zZXROYW1lKG5ld1Rhc2tOYW1lKTtcbiAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgcmVuYW1lVGFza1RpdGxlKHByb2plY3ROYW1lLCB0YXNrTmFtZSwgbmV3VGFza1RpdGxlKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrTmFtZSkuc2V0VGl0bGUobmV3VGFza1RpdGxlKTtcbiAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgc2V0VGFza0RhdGUocHJvamVjdE5hbWUsIHRhc2tOYW1lLCBuZXdEdWVEYXRlKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrTmFtZSkuc2V0RGF0ZShuZXdEdWVEYXRlKTtcbiAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cbn1cbiIsIi8vIGhhbmRsZXMgdGFzayBjcmVhdGlvblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIG5hbWUsIGR1ZURhdGUsIGNvbG9yKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBzZXRUaXRsZSh0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0RGF0ZShkdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXRDb2xvcihjb2xvcikge1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuICBnZXRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvcjtcbiAgfVxuXG4gIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgY29uc3QgZGF5ID0gdGhpcy5kdWVEYXRlLnNwbGl0KFwiL1wiKVswXTtcbiAgICBjb25zdCBtb250aCA9IHRoaXMuZHVlRGF0ZS5zcGxpdChcIi9cIilbMV07XG4gICAgY29uc3QgeWVhciA9IHRoaXMuZHVlRGF0ZS5zcGxpdChcIi9cIilbMl07XG4gICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XG4gIH1cbn1cbiIsIi8vIGhhbmRsZXMgcHJvamVjdHMgYXJyYXkgbGlzdCAocGx1cyBuZXcgcHJvamVjdHMpXG5cbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RzXCI7XG4vLyBpbXBvcnQgeyBjb21wYXJlQXNjLCB0b0RhdGUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbi8vIGltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KFwiVGFza3NcIikpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIlJlbWluZGVyc1wiKSk7XG4gIH1cblxuICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgfVxuXG4gIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gIH1cblxuICBjb250YWlucyhwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gIH1cblxuICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld1Byb2plY3QubmFtZSkpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcbiAgICApO1xuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2VcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5cbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICAvLyBMT0FEIENPTlRFTlRcbiAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcbiAgICBVSS5sb2FkUHJvamVjdHMoKTtcbiAgICBVSS5pbml0UHJvamVjdEJ1dHRvbnMoKTtcbiAgICBVSS5vcGVuUHJvamVjdChcIlRhc2tzXCIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uLXByb2plY3QtdGFza3NcIikpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIFVJLmhhbmRsZUtleWJvYXJkSW5wdXQpO1xuICB9XG4gIHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XG4gICAgU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QubmFtZSAhPT0gXCJUYXNrc1wiICYmIHByb2plY3QubmFtZSAhPT0gXCJSZW1pbmRlcnNcIikge1xuICAgICAgICAgIFVJLmNyZWF0ZVByb2plY3QocHJvamVjdC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgVUkuaW5pdEFkZFByb2plY3RCdXR0b25zKCk7XG4gIH1cbiAgc3RhdGljIGxvYWRUYXNrcyhwcm9qZWN0TmFtZSkge1xuICAgIFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgLmdldFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgICAuZ2V0VGFza3MoKVxuICAgICAgLmZvckVhY2goKHRhc2spID0+XG4gICAgICAgIFVJLmNyZWF0ZVRhc2sodGFzay50aXRsZSwgdGFzay5uYW1lLCB0YXNrLmR1ZURhdGUsIHRhc2suY29sb3IpXG4gICAgICApO1xuXG4gICAgaWYgKHByb2plY3ROYW1lICE9PSBcIlJlbWluZGVyc1wiKSB7XG4gICAgICBVSS5pbml0QWRkVGFza0J1dHRvbnMoKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0TmFtZSkge1xuICAgIFVJLmNsZWFyVGFza3MoKTtcbiAgICBjb25zdCBhZGRUYXNrUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tYWRkXCIpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gXCJSZW1pbmRlcnNcIikge1xuICAgICAgYWRkVGFza1BhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGFkZFRhc2tQYW5lbC5pbm5lckhUTUwgPSBgXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIC8+ICAgICAgXG4gICAgICA8dGV4dGFyZWEgaWQ9XCJ0YXNrXCIgcGxhY2Vob2xkZXI9XCJUYWtlIGEgbm90ZS4uLlwiPjwvdGV4dGFyZWE+XG4gICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uc1wiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiY2hlY2tib3hcIiB0aXRsZT1cIkFkZCBDaGVja2xpc3RcIj48aW9uLWljb24gbmFtZT1cImNoZWNrYm94LW91dGxpbmVcIj48L2lvbi1pY29uPjwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgaWQ9XCJjb2xvclwiIHRpdGxlPVwiQ29sb3JcIiB2YWx1ZT1cIiNGRkZGRkZcIi8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHRpdGxlPVwiQWRkIFJlbWluZGVyXCIvPlxuICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2VcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+YDtcbiAgICB9IGVsc2UgYWRkVGFza1BhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBVSS5sb2FkVGFza3MocHJvamVjdE5hbWUpO1xuICB9XG5cbiAgLy8gQ1JFQVRFL0NMRUFSIENPTlRFTlRcbiAgc3RhdGljIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHVzZXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1wcm9qZWN0cy1saXN0XCIpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpO1xuICAgIGNvbnN0IGFjdGl2ZVRvZ2dsZSA9IG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgPyBcImFjdGl2ZVwiIDogXCJcIjtcblxuICAgIHVzZXJQcm9qZWN0cy5pbm5lckhUTUwgKz0gYCBcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLXByb2plY3RcIiBkYXRhLXByb2plY3QtYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cImxlZnQtcGFuZWxcIj5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJmb2xkZXJcIiBzaXplPVwibGFyZ2VcIj48L2lvbi1pY29uPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIiR7YWN0aXZlVG9nZ2xlfVwiPiR7bmFtZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1wYW5lbCAke2FjdGl2ZVRvZ2dsZX1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWxldGVcIj5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNsb3NlXCIgY2xhc3M9XCJkZWxldGVcIj48L2lvbi1pY29uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5gO1xuICAgIFVJLmluaXRQcm9qZWN0QnV0dG9ucygpO1xuICB9XG4gIHN0YXRpYyBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBjb2xvcikge1xuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGVuZGluZy10YXNrc1wiKTtcbiAgICBjb25zdCBoYXNUaXRsZSA9IHRpdGxlID09PSBcIlwiID8gXCJub25lXCIgOiBcIlwiO1xuICAgIGNvbnN0IGhhc0R1ZURhdGUgPSBkdWVEYXRlID09PSBcIlwiID8gXCJub25lXCIgOiBcIlwiO1xuICAgIHRhc2tzTGlzdC5pbm5lckhUTUwgKz0gYCBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2NvbG9yfVwiIGRhdGEtdGFzay1idXR0b24+XG4gICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZSAke2hhc1RpdGxlfVwiPiR7dGl0bGV9PC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2stdGl0bGVcIiBkYXRhLWlucHV0LXRhc2stdGl0bGU+XG4gICAgICAgIDxwIGNsYXNzPVwidGFzay1kZXNjXCI+JHtkZXNjfTwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrLWRlc2NcIiBkYXRhLWlucHV0LXRhc2stZGVzYz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlYWRsaW5lICR7aGFzRHVlRGF0ZX1cIj5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInRpbWUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPHA+JHtkdWVEYXRlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJ0cmFzaC1iaW5cIiBjbGFzcz1cInRyYXNoXCIgdGl0bGU9XCJEZWxldGUgdGFza1wiPjwvaW9uLWljb24+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCIgY2xhc3M9XCJjb21wbGV0ZVwiIHRpdGxlPVwiTWFyayBhcyBjb21wbGV0ZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBVSS5pbml0VGFza0J1dHRvbnMoKTtcbiAgfVxuICBzdGF0aWMgY3JlYXRlQ29tcGxldGVkVGFzayh0aXRsZSwgZGVzYykge1xuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGVkLXRhc2tzXCIpO1xuICAgIHRhc2tzTGlzdC5pbm5lckhUTUwgKz0gYCBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrIGNvbXBsZXRlZFwiIGRhdGEtdGFzay1idXR0b24+XG4gICAgICAgIDxwPjxiPiR7dGl0bGV9PC9iPjwvcD5cbiAgICAgICAgPHA+JHtkZXNjfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInRyYXNoLWJpblwiIGNsYXNzPVwidHJhc2hcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgVUkuaW5pdFRhc2tCdXR0b25zKCk7XG4gIH1cbiAgc3RhdGljIGNsZWFyUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLXByb2plY3RzLWxpc3RcIik7XG4gICAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIH1cbiAgc3RhdGljIGNsZWFyVGFza3MoKSB7XG4gICAgY29uc3QgcGVuZGluZ1Rhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZW5kaW5nLXRhc2tzXCIpO1xuICAgIHBlbmRpbmdUYXNrcy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWQtdGFza3NcIik7XG4gICAgY29tcGxldGVkVGFza3MuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuICBzdGF0aWMgY2xvc2VBbGxQb3B1cHMoKSB7XG4gICAgVUkuY2xvc2VBZGRQcm9qZWN0UG9wdXAoKTtcbiAgICBVSS5jbG9zZUFsbElucHV0cygpO1xuICB9XG4gIHN0YXRpYyBjbG9zZUFsbElucHV0cygpIHtcbiAgICBjb25zdCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YXNrLWJ1dHRvbl1cIik7XG4gICAgdGFza0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBVSS5jbG9zZVJlbmFtZUlucHV0KGJ1dHRvbiwgXCJkZXNjXCIpO1xuICAgICAgVUkuY2xvc2VSZW5hbWVJbnB1dChidXR0b24sIFwidGl0bGVcIik7XG4gICAgICAvLyBVSS5jbG9zZVNldERhdGVJbnB1dChidXR0b24pXG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGhhbmRsZUtleWJvYXJkSW5wdXQoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikgVUkuY2xvc2VBbGxQb3B1cHMoKTtcbiAgfVxuXG4gIC8vIEFERCBQUk9KRUNUIEVWRU5UIExJU1RFTkVSXG4gIHN0YXRpYyBpbml0QWRkUHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXByb2plY3QtbmV3XCIpO1xuICAgIGNvbnN0IGFkZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1hZGRcIik7XG4gICAgY29uc3QgY2FuY2VsUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWNhbmNlbFwiKTtcbiAgICBjb25zdCBpbnB1dFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1pbnB1dFwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5vcGVuQWRkUHJvamVjdFBvcHVwKTtcbiAgICBjYW5jZWxQb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuY2xvc2VBZGRQcm9qZWN0UG9wdXApO1xuICAgIGFkZFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5hZGRQcm9qZWN0KTtcbiAgICBpbnB1dFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBVSS5oYW5kbGVBZGRQcm9qZWN0UG9wdXBJbnB1dCk7XG4gIH1cbiAgc3RhdGljIG9wZW5BZGRQcm9qZWN0UG9wdXAoKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXY+YnV0dG9uPnNwYW5cIik7XG4gICAgaWYgKCFkZWZhdWx0UHJvamVjdFRleHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSBVSS50b2dnbGVOYXYoKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1wcm9qZWN0LW5ld1wiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LXBvcHVwXCIpO1xuICAgIC8vIFVJLmNsb3NlQWxsUG9wdXBzKClcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgYWRkUHJvamVjdFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbiAgc3RhdGljIGNsb3NlQWRkUHJvamVjdFBvcHVwKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1wcm9qZWN0LW5ld1wiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LXBvcHVwXCIpO1xuICAgIGNvbnN0IGlucHV0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWlucHV0XCIpO1xuICAgIGFkZFByb2plY3RQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBpbnB1dFBvcHVwLnZhbHVlID0gXCJcIjtcbiAgfVxuICBzdGF0aWMgYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBpbnB1dFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1pbnB1dFwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGlucHV0UG9wdXAudmFsdWU7XG5cbiAgICBpZiAocHJvamVjdE5hbWUgPT09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiUHJvamVjdCBuYW1lIGNhbid0IGJlIGVtcHR5LlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoU3RvcmFnZS5nZXRUb2RvTGlzdCgpLmNvbnRhaW5zKHByb2plY3ROYW1lKSkge1xuICAgICAgaW5wdXRQb3B1cC52YWx1ZSA9IFwiXCI7XG4gICAgICBhbGVydChcIlByb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0cy5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgU3RvcmFnZS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSk7XG4gICAgVUkuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgVUkuY2xvc2VBZGRQcm9qZWN0UG9wdXAoKTtcbiAgfVxuICBzdGF0aWMgaGFuZGxlQWRkUHJvamVjdFBvcHVwSW5wdXQoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBVSS5hZGRQcm9qZWN0KCk7XG4gIH1cblxuICAvLyBQUk9KRUNUIEVWRU5UIExJU1RFTkVSXG4gIHN0YXRpYyBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgdGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi1wcm9qZWN0LXRhc2tzXCIpO1xuICAgIGNvbnN0IHJlbWluZGVyc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uLXByb2plY3QtcmVtaW5kZXJzXCIpO1xuICAgIGNvbnN0IG9wZW5OYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi10b2dnbGUtbmF2XCIpO1xuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXByb2plY3QtYnV0dG9uXVwiKTtcbiAgICB0YXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkub3BlblRhc2tzKTtcbiAgICByZW1pbmRlcnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLm9wZW5SZW1pbmRlcnMpO1xuICAgIG9wZW5OYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLnRvZ2dsZU5hdik7XG4gICAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaCgocHJvamVjdEJ1dHRvbikgPT5cbiAgICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmhhbmRsZVByb2plY3RCdXR0b24pXG4gICAgKTtcbiAgfVxuICBzdGF0aWMgb3BlblRhc2tzKCkge1xuICAgIFVJLm9wZW5Qcm9qZWN0KFwiVGFza3NcIiwgdGhpcyk7XG4gIH1cbiAgc3RhdGljIG9wZW5SZW1pbmRlcnMoKSB7XG4gICAgVUkub3BlblByb2plY3QoXCJSZW1pbmRlcnNcIiwgdGhpcyk7XG4gIH1cbiAgc3RhdGljIGhhbmRsZVByb2plY3RCdXR0b24oZSkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlXCIpKSB7XG4gICAgICBVSS5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lLCB0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgVUkub3BlblByb2plY3QocHJvamVjdE5hbWUsIHRoaXMpO1xuICB9XG4gIHN0YXRpYyBvcGVuUHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdEJ1dHRvbikge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5idXR0b24tcHJvamVjdC1kZWZhdWx0XCJcbiAgICApO1xuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tcHJvamVjdFwiKTtcbiAgICBjb25zdCBidXR0b25zID0gWy4uLmRlZmF1bHRQcm9qZWN0QnV0dG9ucywgLi4ucHJvamVjdEJ1dHRvbnNdO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIFVJLmNsb3NlQWRkUHJvamVjdFBvcHVwKCk7XG4gICAgVUkubG9hZFByb2plY3RDb250ZW50KHByb2plY3ROYW1lKTtcbiAgfVxuICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgVUkuY2xlYXJQcm9qZWN0cygpO1xuICAgIFVJLmxvYWRIb21lcGFnZSgpO1xuICB9XG4gIHN0YXRpYyB0b2dnbGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXY+YnV0dG9uPnNwYW5cIik7XG4gICAgY29uc3QgdXNlclByb2plY3RUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sZWZ0LXBhbmVsPnNwYW5cIik7XG4gICAgY29uc3QgdXNlclByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXY+c3BhblwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJpZ2h0LXBhbmVsXCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtcG9wdXBcIik7XG5cbiAgICAvLyBVSS5jbG9zZUFsbFBvcHVwcygpXG4gICAgZGVmYXVsdFByb2plY3RUZXh0LmZvckVhY2goKHRleHQpID0+IHRleHQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKSk7XG4gICAgdXNlclByb2plY3RUZXh0LmZvckVhY2goKHRleHQpID0+IHRleHQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKSk7XG4gICAgdXNlclByb2plY3RMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgZGVsZXRlQnV0dG9uLmZvckVhY2goKHRleHQpID0+IHRleHQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKSk7XG4gICAgaWYgKGFkZFByb2plY3RQb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIFVJLmNsb3NlQWRkUHJvamVjdFBvcHVwKCk7XG4gIH1cblxuICAvLyBBREQgVEFTSyBFVkVOVCBMSVNURU5FUlxuICBzdGF0aWMgaW5pdEFkZFRhc2tCdXR0b25zKCkge1xuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9cIik7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1hZGRcIik7XG4gICAgY29uc3QgYWRkVGFza0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZVwiKTtcbiAgICBjb25zdCBhZGRUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tcIik7XG4gICAgY29uc3QgYWRkVGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcblxuICAgIGFkZFRhc2tDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBVSS5hZGRUYXNrKCk7XG4gICAgICBVSS5jbG9zZUFkZFRhc2tQb3B1cCgpO1xuICAgIH0pO1xuICAgIGFkZFRhc2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgVUkuY2xvc2VBZGRUYXNrUG9wdXAoKTtcbiAgICB9KTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIFVJLm9wZW5BZGRUYXNrUG9wdXAoKTtcbiAgICB9KTtcbiAgICBhZGRUYXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIFVJLmhhbmRsZUFkZFRhc2tQb3B1cElucHV0KTtcbiAgICBhZGRUYXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIFVJLmhhbmRsZUFkZFRhc2tQb3B1cElucHV0KTtcbiAgfVxuICBzdGF0aWMgb3BlbkFkZFRhc2tQb3B1cCgpIHtcbiAgICBjb25zdCBhZGRUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgIGNvbnN0IGFkZFRhc2tPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpO1xuICAgIGFkZFRhc2tPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgYWRkVGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbiAgc3RhdGljIGNsb3NlQWRkVGFza1BvcHVwKCkge1xuICAgIGNvbnN0IGFkZFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgY29uc3QgYWRkVGFza09wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIik7XG4gICAgYWRkVGFza09wdGlvbnMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBhZGRUYXNrVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxuICBzdGF0aWMgYWRkVGFzaygpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGFkZFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgY29uc3QgYWRkVGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrXCIpO1xuICAgIGNvbnN0IGFkZFRhc2tDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JcIik7XG4gICAgY29uc3QgYWRkVGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG4gICAgY29uc3QgdGFza1RpdGxlID0gYWRkVGFza1RpdGxlLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tOYW1lID0gYWRkVGFza0lucHV0LnZhbHVlO1xuICAgIGNvbnN0IHRhc2tDb2xvciA9IGFkZFRhc2tDb2xvci52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGFkZFRhc2tEYXRlLnZhbHVlO1xuXG4gICAgaWYgKHRhc2tOYW1lID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlRhc2sgbmFtZSBjYW4ndCBiZSBlbXB0eS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5jb250YWlucyh0YXNrTmFtZSkpIHtcbiAgICAgIGFsZXJ0KFwiVGFzayBuYW1lIGFscmVhZHkgZXhpc3RzLlwiKTtcbiAgICAgIGFkZFRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICBhZGRUYXNrSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuY29udGFpbnModGFza1RpdGxlKSkge1xuICAgICAgYWxlcnQoXCJUYXNrIHRpdGxlIGFscmVhZHkgZXhpc3RzLlwiKTtcbiAgICAgIGFkZFRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICBhZGRUYXNrSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFN0b3JhZ2UuYWRkVGFzayhcbiAgICAgIHByb2plY3ROYW1lLFxuICAgICAgbmV3IFRhc2sodGFza1RpdGxlLCB0YXNrTmFtZSwgdGFza0RhdGUsIHRhc2tDb2xvcilcbiAgICApO1xuICAgIFVJLmNyZWF0ZVRhc2sodGFza1RpdGxlLCB0YXNrTmFtZSwgdGFza0RhdGUsIHRhc2tDb2xvcik7XG4gICAgYWRkVGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgICBhZGRUYXNrVGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIGFkZFRhc2tEYXRlLnZhbHVlID0gXCJcIjtcbiAgICBhZGRUYXNrQ29sb3IudmFsdWUgPSBcIiNGRkZGRkZcIjtcbiAgICBVSS5jbG9zZUFkZFRhc2tQb3B1cCgpO1xuICB9XG4gIHN0YXRpYyBoYW5kbGVBZGRUYXNrUG9wdXBJbnB1dChlKSB7XG4gICAgY29uc3QgYWRkVGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbiAgICBjb25zdCBhZGRUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tcIik7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIFVJLmFkZFRhc2soKTtcbiAgICAgIGFkZFRhc2tJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICBhZGRUYXNrVGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgYWRkVGFza1RpdGxlLmJsdXIoKTtcbiAgICAgIGFkZFRhc2tJbnB1dC5ibHVyKCk7XG4gICAgICBVSS5jbG9zZUFkZFRhc2tQb3B1cCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vY29udGludWUgaGVyZSEhXG4gIC8vIHJlIGFkanVzdCBkYXRlLyByZWNoYW5nZSBjb2xvciBvbiBhIHRhc2tcbiAgLy8gYWRkIGNsYXNzIGZvciBjb21wbGV0ZWQgdGFza3NcbiAgLy8gZGF0ZSBmb3JtYXQgZm9yIHRhc2tzXG4gIC8vIHByZXZlbnQgcGlja2luZyBwYXN0IGRhdGVzXG4gIC8vIGFkZCBhbGwgdGFza3Mgd2l0aCBkYXRlcyBpbiByZW1pbmRlcnNcblxuICAvLyBUQVNLIEVWRU5UIExJU1RFTkVSXG4gIHN0YXRpYyBpbml0VGFza0J1dHRvbnMoKSB7XG4gICAgY29uc3QgdGFza0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGFzay1idXR0b25dXCIpO1xuICAgIGNvbnN0IHRhc2tEZXNjSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWlucHV0LXRhc2stZGVzY11cIik7XG4gICAgY29uc3QgdGFza1RpdGxlSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiW2RhdGEtaW5wdXQtdGFzay10aXRsZV1cIlxuICAgICk7XG4gICAgLy8gY29uc3QgZHVlRGF0ZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWlucHV0LWR1ZS1kYXRlXScpXG4gICAgdGFza0J1dHRvbnMuZm9yRWFjaCgodGFza0J1dHRvbikgPT5cbiAgICAgIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmhhbmRsZVRhc2tCdXR0b24pXG4gICAgKTtcbiAgICB0YXNrRGVzY0lucHV0cy5mb3JFYWNoKCh0YXNrRGVzY0lucHV0KSA9PlxuICAgICAgdGFza0Rlc2NJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgVUkucmVuYW1lVGFza0Rlc2NyaXB0aW9uKVxuICAgICk7XG4gICAgdGFza1RpdGxlSW5wdXRzLmZvckVhY2goKHRhc2tUaXRsZUlucHV0KSA9PlxuICAgICAgdGFza1RpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIFVJLnJlbmFtZVRhc2tUaXRsZSlcbiAgICApO1xuICB9XG4gIHN0YXRpYyBoYW5kbGVUYXNrQnV0dG9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGVcIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGVcIik7XG4gICAgICBVSS5zZXRUYXNrQ29tcGxldGVkKHRoaXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidHJhc2hcIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidHJhc2hcIik7XG4gICAgICBVSS5kZWxldGVUYXNrKHRoaXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay1kZXNjXCIpKSB7XG4gICAgICBVSS5vcGVuUmVuYW1lSW5wdXQodGhpcywgXCJkZXNjXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay10aXRsZVwiKSkge1xuICAgICAgY29uc29sZS5sb2coXCJ0aXRsZVwiKTtcbiAgICAgIFVJLm9wZW5SZW5hbWVJbnB1dCh0aGlzLCBcInRpdGxlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWFkbGluZScpKSB7XG4gICAgLy8gICBVSS5vcGVuU2V0RGF0ZUlucHV0KHRoaXMpXG4gICAgLy8gfVxuICB9XG4gIHN0YXRpYyBzZXRUYXNrQ29tcGxldGVkKHRhc2tCdXR0b24pIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tCdXR0b24uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gdGFza0J1dHRvbi5jaGlsZHJlblsyXS50ZXh0Q29udGVudDtcbiAgICBTdG9yYWdlLmRlbGV0ZVRhc2socHJvamVjdE5hbWUsIHRhc2tEZXNjcmlwdGlvbik7XG4gICAgVUkuY2xlYXJUYXNrcygpO1xuICAgIFVJLmxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgVUkuY3JlYXRlQ29tcGxldGVkVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbik7XG4gIH1cbiAgc3RhdGljIGRlbGV0ZVRhc2sodGFza0J1dHRvbikge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gdGFza0J1dHRvbi5jaGlsZHJlblsyXS50ZXh0Q29udGVudDtcbiAgICBTdG9yYWdlLmRlbGV0ZVRhc2socHJvamVjdE5hbWUsIHRhc2tEZXNjcmlwdGlvbik7XG4gICAgVUkuY2xlYXJUYXNrcygpO1xuICAgIFVJLmxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gIH1cbiAgc3RhdGljIG9wZW5SZW5hbWVJbnB1dCh0YXNrQnV0dG9uLCB0eXBlKSB7XG4gICAgY29uc3QgdGFza1NlbGVjdGVkID1cbiAgICAgIHR5cGUgPT09IFwiZGVzY1wiID8gdGFza0J1dHRvbi5jaGlsZHJlblsyXSA6IHRhc2tCdXR0b24uY2hpbGRyZW5bMF07XG4gICAgY29uc3QgdGFza0lucHV0ID1cbiAgICAgIHR5cGUgPT09IFwiZGVzY1wiID8gdGFza0J1dHRvbi5jaGlsZHJlblszXSA6IHRhc2tCdXR0b24uY2hpbGRyZW5bMV07XG4gICAgbGV0IHRhc2tEZXNjID0gdGFza1NlbGVjdGVkLnRleHRDb250ZW50O1xuICAgIFVJLmNsb3NlQWxsUG9wdXBzKCk7XG4gICAgdGFza1NlbGVjdGVkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdGFza0lucHV0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdGFza0lucHV0LnZhbHVlID0gdGFza0Rlc2M7XG4gICAgdGFza0lucHV0LmZvY3VzKCk7XG4gIH1cbiAgc3RhdGljIGNsb3NlUmVuYW1lSW5wdXQodGFza0J1dHRvbiwgdHlwZSkge1xuICAgIGNvbnN0IHRhc2tTZWxlY3RlZCA9XG4gICAgICB0eXBlID09PSBcImRlc2NcIiA/IHRhc2tCdXR0b24uY2hpbGRyZW5bMl0gOiB0YXNrQnV0dG9uLmNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IHRhc2tJbnB1dCA9XG4gICAgICB0eXBlID09PSBcImRlc2NcIiA/IHRhc2tCdXR0b24uY2hpbGRyZW5bM10gOiB0YXNrQnV0dG9uLmNoaWxkcmVuWzFdO1xuICAgIHRhc2tTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRhc2tJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRhc2tJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH1cbiAgc3RhdGljIHJlbmFtZVRhc2tEZXNjcmlwdGlvbihlKSB7XG4gICAgaWYgKGUua2V5ICE9PSBcIkVudGVyXCIpIHJldHVybjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHRhc2tEZXNjID0gdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xuICAgIGNvbnN0IG5ld1Rhc2tEZXNjID0gdGhpcy52YWx1ZTtcbiAgICBpZiAobmV3VGFza0Rlc2MgPT09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiRmllbGQgY2Fubm90IGJlIGJsYW5rLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgU3RvcmFnZS5yZW5hbWVUYXNrKHByb2plY3ROYW1lLCB0YXNrRGVzYywgbmV3VGFza0Rlc2MpO1xuICAgIFVJLmNsZWFyVGFza3MoKTtcbiAgICBVSS5sb2FkVGFza3MocHJvamVjdE5hbWUpO1xuICAgIFVJLmNsb3NlUmVuYW1lSW5wdXQodGhpcy5wYXJlbnROb2RlKTtcbiAgfVxuICBzdGF0aWMgcmVuYW1lVGFza1RpdGxlKGUpIHtcbiAgICBpZiAoZS5rZXkgIT09IFwiRW50ZXJcIikgcmV0dXJuO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdGFza0Rlc2MgPSB0aGlzLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgICBjb25zdCBuZXdUYXNrRGVzYyA9IHRoaXMudmFsdWU7XG4gICAgaWYgKG5ld1Rhc2tEZXNjID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIkZpZWxkIGNhbm5vdCBiZSBibGFuay5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFN0b3JhZ2UucmVuYW1lVGFza1RpdGxlKHByb2plY3ROYW1lLCB0YXNrRGVzYywgbmV3VGFza0Rlc2MpO1xuICAgIFVJLmNsZWFyVGFza3MoKTtcbiAgICBVSS5sb2FkVGFza3MocHJvamVjdE5hbWUpO1xuICAgIFVJLmNsb3NlUmVuYW1lSW5wdXQodGhpcy5wYXJlbnROb2RlKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBVSS5sb2FkSG9tZXBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9