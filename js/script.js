const buttonDone = document.querySelector('.form__button--done');

const recoverEmail = document.querySelector('.form__input--recover-email');

const recoverPhoneNumber = document.querySelector('.form__input--recover-phone-number');

changeButton = () => {
  if (recoverEmail.value === "" || recoverPhoneNumber.value === "") {
    buttonDone.style.backgroundColor = "#bedc9a";
    buttonDone.setAttribute('disabled', true);
  } else {
    buttonDone.style.backgroundColor = "#9cd437";
    buttonDone.removeAttribute('disabled');
  }
}

recoverEmail.addEventListener('input', changeButton);
recoverPhoneNumber.addEventListener('input', changeButton);