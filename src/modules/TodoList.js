// handles projects array list (plus new projects)

import Project from "./Projects";
// import { compareAsc, toDate } from "date-fns";
import Task from "./Task";

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Tasks"));
    this.projects.push(new Project("Reminders"));
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

  // fix code snippet not working with 'tasks'
  // add code to ignore undefined/ no date tasks
  updateReminders() {
    this.getProject("Reminders").tasks = [];
    this.projects.forEach((project) => {
      if (project.getName() === "Tasks") return;

      const taskReminders = project.getTaskReminders();

      taskReminders.forEach((task) => {
        const taskName = `${task.getName()} (${project.getName()})`;
        this.getProject("Reminders").addTask(
          new Task(taskName, task.getDate())
        );
      });
    });
  }
}
