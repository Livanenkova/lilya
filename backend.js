const $questionNumber = document.querySelector('.question__top-text');
const $question = document.querySelector('.question');
const $btnYes = document.querySelector('.question__btn-yes');
const $btnNo = document.querySelector('.question__btn-no');

const btnYesValue = 'btn-yes';
const btnNoValue = 'btn-no';

console.log($questionNumber)

const question = {
  question1:'вопрос 1',
  question2:'вопрос 2',
  question3:'вопрос 4',
  question4:'вопрос 4',
  question5:'вопрос 5',
  question6:'вопрос 6',
  question7:'вопрос 7',
  question8:'вопрос 8',
  question9:'вопрос 9',
  question10:'вопрос 10',
}

answer = ['yes','no','yes','no','yes','no','yes','no','yes','no',];

document.addEventListener("DOMContentLoaded", ready);

function ready() {
  for(let i = 0; i < answer.length; i++ ) {
    $questionNumber.innerText = i;
    $question.innerText = question.question1;
  }
}