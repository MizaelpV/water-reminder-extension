// var hidden, visibilityChange;
// if (typeof document.hidden !== 'undefined') {
//   // Opera 12.10 and Firefox 18 and later support
//   hidden = 'hidden';
//   visibilityChange = 'visibilitychange';
// } else if (typeof document.msHidden !== 'undefined') {
//   hidden = 'msHidden';
//   visibilityChange = 'msvisibilitychange';
// } else if (typeof document.webkitHidden !== 'undefined') {
//   hidden = 'webkitHidden';
//   visibilityChange = 'webkitvisibilitychange';
// }

// const sendNotification = () => {
//   const notification = new Notification(
//     'New message from notifications desktop',
//     {
//       body: 'I am very happy with this',
//     }
//   );
//   return notification;
// };

const totalTime = document.getElementById('totalTime');
const intervalTime = document.getElementById('intervalTime');
const text = document.querySelector('.paragraphModal');

const modal = document.getElementById('modal');
const closeModal = () => {
  modal.style.display = 'none';
};

const activate = () => {
  if (totalTime.value !== '' || intervalTime.value !== '') {
    modal.style.display = 'block';
    text.innerText = `¡Te avisaremos cada ${intervalTime.value} minutos durante ${totalTime.value} horas! 🚀`;
  } else {
    alert('Debes agregar por cuanto tiempo quieres que te avisemos 😬');
  }
  setTimer(intervalTime.value);
  totalTime.value = '';
  intervalTime.value = '';
};

const setTimer = (min) => {
  setTimeout(() => {
    alert('testing');
  }, min);
};
