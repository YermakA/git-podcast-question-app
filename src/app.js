import './styles.css';
import { isValid } from './utils';
import { Question } from './question.js'

const form = document.getElementById('form');
const input = form.querySelector('#questions-input');
const sumbitBtn = form.querySelector('#submit');

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