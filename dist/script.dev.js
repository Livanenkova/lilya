"use strict";

function createElement(tag, className) {
  var $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

;

function showMainButton() {
  var $containerMainBtn = document.querySelector('.container__main-button');
  var $mainButton = createElement('a', 'main-button');
  $containerMainBtn.appendChild($mainButton);
}

setTimeout(showMainButton, 3000);