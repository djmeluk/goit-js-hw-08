import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));

const dataFormUser = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onFeedbackFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(dataFormUser);
}
function onFeedbackFormInput(event) {
    dataFormUser[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY,JSON.stringify( dataFormUser))
    
}
function populateInput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const messageParse = JSON.parse(savedMessage);
    if (messageParse) {
        inputEmail.value = messageParse.email || "";
        inputMessage.value = messageParse.message || "";
    }
}
populateInput()