const modal = document.getElementById('modal');
const modalAlert = document.getElementById('modalAlert');
const text = document.querySelector('.paragraph-modal');
let hours = document.getElementById('hours').value;
let minutes = document.getElementById('minutes').value;
const motivation = document.querySelector('.motivation');

const closeModal = () => {
  modal.style.display === 'block' || modalAlert.style.display === 'block';
  return (modal.style.display = 'none'), (modalAlert.style.display = 'none');
};

const activate = () => {
  if (hours === '0' || hours === '' || minutes === '0' || minutes === '') {
    text.innerText = `Indicanos por cuanto tiempo te avisamos 🚀 `;
    modal.style.display = 'block';
    motivation.innerText = 'Necesitamos tu ayuda 💪🏽';
    motivation.style.backgroundColor = '#f3f3f3';
    motivation.style.color = '#3f2b96';
  } else {
    motivation.innerText = 'Perfecto, vamos a darle 🚀❤️ ';
    text.innerText = `¡Te avisaremos cada ${minutes} minutos durante ${hours} horas!`;
    modal.style.display = 'block';
  }
  setTimer(minutes);
  hours = '';
  minutes = '';
};

const setTimer = (min) => {
  if (min !== '') {
    const miliseconds = min * 1000;
    setTimeout(() => {
      console.log('Alert 🔥🔥 ');
    }, miliseconds);
  }
};
