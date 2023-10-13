// handles task creation

export default class Task {
  constructor(title, name, dueDate, color, isDone) {
    this.title = title;
    this.name = name;
    this.dueDate = dueDate;
    this.color = color;
    this.isDone = isDone;
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

  setisDone(isDone) {
    this.isDone = isDone;
  }
  getisDone() {
    return this.isDone;
  }

  getDateFormatted() {
    const day = this.dueDate.split("/")[0];
    const month = this.dueDate.split("/")[1];
    const year = this.dueDate.split("/")[2];
    return `${month}/${day}/${year}`;
  }
}
