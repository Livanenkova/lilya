"use strict";

var $questionNumber = document.querySelector('.question__top-text');
var $question = document.querySelector('.question');
var $btnYes = document.querySelector('.question__btn-yes');
var $btnNo = document.querySelector('.question__btn-no');
var btnYesValue = 'btn-yes';
var btnNoValue = 'btn-no';
console.log($questionNumber);
var question = {
  question1: 'вопрос 1',
  question2: 'вопрос 2',
  question3: 'вопрос 4',
  question4: 'вопрос 4',
  question5: 'вопрос 5',
  question6: 'вопрос 6',
  question7: 'вопрос 7',
  question8: 'вопрос 8',
  question9: 'вопрос 9',
  question10: 'вопрос 10'
};
answer = ['yes', 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no'];
document.addEventListener("DOMContentLoaded", ready);

function ready() {
  for (var i = 0; i < answer.length; i++) {
    $questionNumber.innerText = i;
    $question.innerText = question.question1;
  }
}