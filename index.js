const modal = document.getElementById('modal');
const modalAlert = document.getElementById('modalAlert');
const text = document.querySelector('.paragraphModal');
const totalTime = document.getElementById('totalTime');
const intervalTime = document.getElementById('intervalTime');

const closeModal = () => {
  if (modal.style.display === 'block') {
    return (modal.style.display = 'none');
  } else if (modalAlert.style.display === 'block') {
    return (modalAlert.style.display = 'none');
  }
};

const activate = () => {
  if (totalTime.value !== '' && intervalTime.value !== '') {
    let minutes = intervalTime.value;
    let hours = totalTime.value;
    modal.style.display = 'block';
    text.innerText = `¡Te avisaremos cada ${minutes} minutos durante ${hours} horas! 🚀`;
  } else {
    modalAlert.style.display = 'block';
    console.log(text.innerText);
    text.innerText = `¡Te avisaremos cada minutos durante  horas! 🚀`;
  }
  setTimer(intervalTime.value);
  totalTime.value = '';
  intervalTime.value = '';
};

const setTimer = (min) => {
  if (min !== '') {
    const miliseconds = min * 1000;
    console.log(miliseconds);
    setTimeout(() => {
      alert('testing');
    }, miliseconds);
  }
};
