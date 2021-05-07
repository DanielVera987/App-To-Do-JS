import Alert from "./alert.js";

export default class Modal {
  constructor(){
    this.modal = document.getElementById('modal');
    this.btn = document.getElementById('modal-btn');
    this.title = document.getElementById('modal-title');
    this.description = document.getElementById('modal-description');
    this.completed = document.getElementById('modal-completed');
    this.alert = new Alert('modal-alert');

    this.todo = null;
  }

  setValues(todo) {
    this.todo = todo;
    this.title.value = todo.title;
    this.description.value = todo.description;
    this.completed.value = todo.completed;
  }

  onClick(cb) {
    this.btn.addEventListener('click', () => {
      if(!this.title.value || !this.description.value) {
        this.alert.show('Title and description are required');
        return;
      }

      $("#modal").modal('toggle');

      cb(this.todo.id, {
        title: this.title.value,
        description: this.description.value,
        completed: this.completed.checked
      });
    });
  }
}