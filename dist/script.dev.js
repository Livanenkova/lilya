"use strict";

function createElement(tag, className) {
  var $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

;

function playAudio() {
  var audio = document.getElementById("myaudio");
  audio.volume = 0.2;
}

function showMainButton() {
  var $containerMainBtn = document.querySelector('.container__main-button');
  var $mainButton = createElement('a', 'main-button');
  $containerMainBtn.appendChild($mainButton);
  $mainButton.innerText = 'play';
  $mainButton.setAttribute("href", "welcomepage.html");
}

playAudio();
setTimeout(showMainButton, 3000);