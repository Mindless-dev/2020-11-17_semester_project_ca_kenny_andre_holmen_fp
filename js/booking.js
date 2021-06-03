const form = document.querySelector("form");
const formSubmit = document.querySelector("#confirmForm");
const date = document.querySelector("#date");
const dateError = document.querySelector("#dateError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const cardNo = document.querySelector("#cardNo");
const cardNoError = document.querySelector("#cardNoError");
const cardExpiry = document.querySelector("#expiry_date");
const cardExpiryError = document.querySelector("#expiryError");
const cvc = document.querySelector("#CVC");
const cvcError = document.querySelector("#cvcError");

function validationForm(event) {
  let sucessCounter = 0;
  event.preventDefault();
  if (date.value === "") {
    dateError.style.display = "flex";
  } else {
    dateError.style.display = "none";
    sucessCounter++;
  }
  if (emailValidation(email.value) & (email.value.trim().length > 0)) {
    emailError.style.display = "none";
    sucessCounter++;
  } else {
    emailError.style.display = "flex";
  }

  if (cardNo.value.length === 16) {
    cardNoError.style.display = "none";
    sucessCounter++;
  } else {
    cardNoError.style.display = "flex";
  }

  if (cardExpiry.value === "") {
    cardExpiryError.style.display = "flex";
  } else {
    cardExpiryError.style.display = "none";
    sucessCounter++;
  }
  if (cvc.value.length === 3) {
    cvcError.style.display = "none";
    sucessCounter++;
  } else {
    cvcError.style.display = "flex";
  }
  if (sucessCounter === 5) {
    form.submit();
  }
}

formSubmit.addEventListener("click", validationForm);

function emailValidation(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const emailMatch = regEx.test(email);
  return emailMatch;
}
