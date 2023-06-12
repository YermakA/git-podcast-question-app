import './styles.css';
import { isValid, createModal } from './utils';
import { Question } from './question.js'

const form = document.getElementById('form');
const modalBtn = document.getElementById('modal-btn');
const input = form.querySelector('#questions-input');
const sumbitBtn = form.querySelector('#submit');

window.addEventListener('load', Question.renderList);
modalBtn.addEventListener('click', openModal);
form.addEventListener('submit', submitFormHandler);
input.addEventListener('input', () => {
  sumbitBtn.disabled = !isValid(input.value);
})

function submitFormHandler(event) {
  event.preventDefault();

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON(),
    }

    sumbitBtn.disabled = true;

    // Async request to server to save question
    Question.create(question).then(() => {
      input.value = '';
      input.className = '';
      sumbitBtn.disabled = false;
    }
    );


    console.log("Question", question);
  }
}

function openModal() {
  createModal('Авторизация', `<h1>Test</h1>`);
}