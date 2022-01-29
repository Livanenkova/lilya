function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className){
    $tag.classList.add(className);
  }
  return $tag;
};
  
function showMainButton() {
  console.log('успех')
  const $containerMainBtn = document.querySelector('.container__main-button');
  const $mainButton = createElement('a','main-button');
  $containerMainBtn.appendChild($mainButton);
  $mainButton.innerText = 'play';
  $mainButton.setAttribute("href", "welcomepage.html");
}

  setTimeout(showMainButton, 3000);