export default class Alert{
  constructor(alertId) {
    this.alert = document.getElementById(alertId);
  }

  show(message) {
    this.alert.classList.remove('d-none');
    this.alert.innerText = message;
  }

  hiden(message){
    this.alert.classList.add('d-none');
  }
}