import Alert from './alert.js';

export default class AddTodo{
  constructor(){ 
    this.btn = document.getElementById('add');
    this.title = document.getElementById('title');
    this.description = document.getElementById('description');

    this.alert = new Alert('alert');
  }

  onClick(cb) {
    this.btn.onclick = () => {
      if(title.value === '' || description === '') {
        this.alert.show('Title and description are required');
        console.error('error');
      }else{
        this.alert.hiden();
        cb(this.title.value, this.description.value);
        this.title.value = null;
        this.description.value = null;
      }
    }
  }
}