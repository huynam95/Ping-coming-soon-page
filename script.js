"use strict";

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".email-input");

const errorText = document.querySelector(".error-text");

const overlayEl = document.querySelector(".overlay");
const signUpSuccess = document.querySelector(".sign-up-success");
const btnBack = document.querySelector(".btn-back");

let value = true;

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  value = true;
  inputEl.style.border = "1px solid hsl(223, 100%, 88%)";
  errorText.classList.add("hidden");

  if (inputEl.validity.valueMissing) {
    errorText.textContent = "Please insert your email address";
    errorText.classList.remove("hidden");
    inputEl.style.border = "1px solid hsl(354, 100%, 66%)";
    value = false;
  }

  if (inputEl.validity.typeMismatch) {
    errorText.textContent = "Please insert your email address";
    inputEl.style.border = "1px solid hsl(354, 100%, 66%)";
    errorText.classList.remove("hidden");
    value = false;
  }

  if (value) {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    inputEl.value = "";
    overlayEl.classList.remove("hidden");
    signUpSuccess.classList.remove("hidden");
  }

  return value;
});

btnBack.addEventListener("click", function (e) {
  signUpSuccess.classList.add("hidden");
  overlayEl.classList.add("hidden");
});

overlayEl.addEventListener("click", function (e) {
  signUpSuccess.classList.add("hidden");
  overlayEl.classList.add("hidden");
});
