const modal = document.getElementById('modal');
const modalAlert = document.getElementById('modalAlert');
const text = document.querySelector('.paragraph-modal');
const totalTime = document.getElementById('totalTime');
const intervalTime = document.getElementById('intervalTime');
const motivation = document.querySelector('.motivation');

const closeModal = () => {
  modal.style.display === 'block' || modalAlert.style.display === 'block';
  return (modal.style.display = 'none'), (modalAlert.style.display = 'none');
};

const activate = () => {
  if (totalTime.value === '' && intervalTime.value === '') {
    text.innerText = `Indicanos por cuanto tiempo te avisamos por favor ⏰`;
    modal.style.display = 'block';
    motivation.innerText = 'Necesitamos tu ayuda 💪🏽';
    motivation.style.backgroundColor = '#f3f3f3';
    motivation.style.color = '#3f2b96';
  } else {
    let minutes = intervalTime.value;
    let hours = totalTime.value;
    motivation.innerText = 'Perfecto, vamos a darle lets go 🚀 ';
    text.innerText = `¡Te avisaremos cada ${minutes} minutos durante ${hours} horas! 🚀`;
    modal.style.display = 'block';
  }
  setTimer(intervalTime.value);
  totalTime.value = '';
  intervalTime.value = '';
};

const setTimer = (min) => {
  if (min !== '') {
    const miliseconds = min * 1000;
    setTimeout(() => {
      alert('Alert  🔥');
    }, miliseconds);
  }
};
