const inputHeader = document.getElementById('input-header');
const buttonHeader = document.getElementById('button-header');


const toggleButtonState = () => {
  if (inputHeader.value.trim() !== '') {
    buttonHeader.classList.remove('button-disable');
    buttonHeader.removeAttribute('disabled');
  } else {
    buttonHeader.classList.add('button-disable');
    buttonHeader.setAttribute('disabled', true);
  }
};

inputHeader.addEventListener('input', toggleButtonState);
