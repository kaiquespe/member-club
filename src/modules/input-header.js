import IMask from "imask";
const inputHeader = document.getElementById('input-header');
const buttonHeader = document.getElementById('button-header');

IMask(inputHeader, {
  mask: '000-000-000-000'
});

const toggleButtonState = () => {
  if (inputHeader.value.trim().length === 15) {
    buttonHeader.classList.remove('button-disable');
    buttonHeader.removeAttribute('disabled');
  } else {
    buttonHeader.classList.add('button-disable');
    buttonHeader.setAttribute('disabled', true);
  }
};

inputHeader.addEventListener('input', toggleButtonState);

toggleButtonState();